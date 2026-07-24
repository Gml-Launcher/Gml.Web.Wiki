import {useEffect, useRef, useState} from 'react';
import {Mesh, Program, Renderer, Triangle} from 'ogl';
import './LightRays.css';

const DEFAULT_COLOR = '#ffffff';

const hexToRgb = (hex) => {
    const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return match
        ? [
            parseInt(match[1], 16) / 255,
            parseInt(match[2], 16) / 255,
            parseInt(match[3], 16) / 255,
        ]
        : [1, 1, 1];
};

const getAnchorAndDirection = (origin, width, height) => {
    const outside = 0.2;

    switch (origin) {
        case 'top-left':
            return {anchor: [0, -outside * height], direction: [0, 1]};
        case 'top-right':
            return {anchor: [width, -outside * height], direction: [0, 1]};
        case 'left':
            return {anchor: [-outside * width, 0.5 * height], direction: [1, 0]};
        case 'right':
            return {anchor: [(1 + outside) * width, 0.5 * height], direction: [-1, 0]};
        case 'bottom-left':
            return {anchor: [0, (1 + outside) * height], direction: [0, -1]};
        case 'bottom-center':
            return {anchor: [0.5 * width, (1 + outside) * height], direction: [0, -1]};
        case 'bottom-right':
            return {anchor: [width, (1 + outside) * height], direction: [0, -1]};
        default:
            return {anchor: [0.5 * width, -outside * height], direction: [0, 1]};
    }
};

const vertexShader = `
attribute vec2 position;
varying vec2 vUv;

void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec2 iResolution;
uniform vec2 rayPos;
uniform vec2 rayDir;
uniform vec3 raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2 mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float rayStrength(
    vec2 raySource,
    vec2 rayReferenceDirection,
    vec2 coordinate,
    float seedA,
    float seedB,
    float speed
) {
    vec2 sourceToCoordinate = coordinate - raySource;
    vec2 direction = normalize(sourceToCoordinate);
    float angle = dot(direction, rayReferenceDirection);
    float distortedAngle = angle
        + distortion * sin(iTime * 2.0 + length(sourceToCoordinate) * 0.01) * 0.2;
    float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));
    float distanceFromSource = length(sourceToCoordinate);
    float maxDistance = iResolution.x * rayLength;
    float lengthFalloff = clamp(
        (maxDistance - distanceFromSource) / maxDistance,
        0.0,
        1.0
    );
    float fadeFalloff = clamp(
        (iResolution.x * fadeDistance - distanceFromSource)
            / (iResolution.x * fadeDistance),
        0.5,
        1.0
    );
    float pulse = pulsating > 0.5
        ? 0.8 + 0.2 * sin(iTime * speed * 3.0)
        : 1.0;
    float baseStrength = clamp(
        (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed))
            + (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
        0.0,
        1.0
    );

    return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragmentColor, in vec2 fragmentCoordinate) {
    vec2 coordinate = vec2(fragmentCoordinate.x, iResolution.y - fragmentCoordinate.y);
    vec2 finalRayDirection = rayDir;

    if (mouseInfluence > 0.0) {
        vec2 mouseScreenPosition = mousePos * iResolution.xy;
        vec2 mouseDirection = normalize(mouseScreenPosition - rayPos);
        finalRayDirection = normalize(mix(rayDir, mouseDirection, mouseInfluence));
    }

    vec4 firstRays = vec4(1.0) * rayStrength(
        rayPos,
        finalRayDirection,
        coordinate,
        36.2214,
        21.11349,
        1.5 * raysSpeed
    );
    vec4 secondRays = vec4(1.0) * rayStrength(
        rayPos,
        finalRayDirection,
        coordinate,
        22.3991,
        18.0234,
        1.1 * raysSpeed
    );

    fragmentColor = firstRays * 0.5 + secondRays * 0.4;

    if (noiseAmount > 0.0) {
        float noiseValue = noise(coordinate * 0.01 + iTime * 0.1);
        fragmentColor.rgb *= 1.0 - noiseAmount + noiseAmount * noiseValue;
    }

    float brightness = 1.0 - coordinate.y / iResolution.y;
    fragmentColor.x *= 0.1 + brightness * 0.8;
    fragmentColor.y *= 0.3 + brightness * 0.6;
    fragmentColor.z *= 0.5 + brightness * 0.5;

    if (saturation != 1.0) {
        float gray = dot(fragmentColor.rgb, vec3(0.299, 0.587, 0.114));
        fragmentColor.rgb = mix(vec3(gray), fragmentColor.rgb, saturation);
    }

    fragmentColor.rgb *= raysColor;
}

void main() {
    vec4 color;
    mainImage(color, gl_FragCoord.xy);
    gl_FragColor = color;
}
`;

export default function LightRays({
    raysOrigin = 'top-center',
    raysColor = DEFAULT_COLOR,
    raysSpeed = 1,
    lightSpread = 1,
    rayLength = 2,
    pulsating = false,
    fadeDistance = 1,
    saturation = 1,
    followMouse = true,
    mouseInfluence = 0.1,
    noiseAmount = 0,
    distortion = 0,
    className = '',
}) {
    const containerRef = useRef(null);
    const rendererRef = useRef(null);
    const uniformsRef = useRef(null);
    const meshRef = useRef(null);
    const animationFrameRef = useRef(null);
    const cleanupRef = useRef(null);
    const mouseRef = useRef({x: 0.5, y: 0.5});
    const smoothMouseRef = useRef({x: 0.5, y: 0.5});
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            {threshold: 0.1},
        );

        observer.observe(container);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible || !containerRef.current) {
            return undefined;
        }

        cleanupRef.current?.();

        const container = containerRef.current;
        const renderer = new Renderer({
            dpr: Math.min(window.devicePixelRatio, 2),
            alpha: true,
        });
        const gl = renderer.gl;

        rendererRef.current = renderer;
        gl.canvas.style.width = '100%';
        gl.canvas.style.height = '100%';
        container.replaceChildren(gl.canvas);

        const uniforms = {
            iTime: {value: 0},
            iResolution: {value: [1, 1]},
            rayPos: {value: [0, 0]},
            rayDir: {value: [0, 1]},
            raysColor: {value: hexToRgb(raysColor)},
            raysSpeed: {value: raysSpeed},
            lightSpread: {value: lightSpread},
            rayLength: {value: rayLength},
            pulsating: {value: pulsating ? 1 : 0},
            fadeDistance: {value: fadeDistance},
            saturation: {value: saturation},
            mousePos: {value: [0.5, 0.5]},
            mouseInfluence: {value: mouseInfluence},
            noiseAmount: {value: noiseAmount},
            distortion: {value: distortion},
        };
        const geometry = new Triangle(gl);
        const program = new Program(gl, {
            vertex: vertexShader,
            fragment: fragmentShader,
            uniforms,
        });
        const mesh = new Mesh(gl, {geometry, program});

        uniformsRef.current = uniforms;
        meshRef.current = mesh;

        const updatePlacement = () => {
            if (!containerRef.current) {
                return;
            }

            renderer.dpr = Math.min(window.devicePixelRatio, 2);

            const {clientWidth, clientHeight} = containerRef.current;
            renderer.setSize(clientWidth, clientHeight);

            const width = clientWidth * renderer.dpr;
            const height = clientHeight * renderer.dpr;
            const {anchor, direction} = getAnchorAndDirection(
                raysOrigin,
                width,
                height,
            );

            uniforms.iResolution.value = [width, height];
            uniforms.rayPos.value = anchor;
            uniforms.rayDir.value = direction;
        };

        const render = (time) => {
            if (!rendererRef.current || !uniformsRef.current || !meshRef.current) {
                return;
            }

            uniforms.iTime.value = time * 0.001;

            if (followMouse && mouseInfluence > 0) {
                const smoothing = 0.92;
                const smoothMouse = smoothMouseRef.current;
                const mouse = mouseRef.current;

                smoothMouse.x = smoothMouse.x * smoothing + mouse.x * (1 - smoothing);
                smoothMouse.y = smoothMouse.y * smoothing + mouse.y * (1 - smoothing);
                uniforms.mousePos.value = [smoothMouse.x, smoothMouse.y];
            }

            renderer.render({scene: mesh});
            animationFrameRef.current = requestAnimationFrame(render);
        };

        const resizeObserver = new ResizeObserver(updatePlacement);
        resizeObserver.observe(container);
        updatePlacement();
        animationFrameRef.current = requestAnimationFrame(render);

        cleanupRef.current = () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }

            resizeObserver.disconnect();

            const canvas = renderer.gl.canvas;
            const loseContext = renderer.gl.getExtension('WEBGL_lose_context');
            loseContext?.loseContext();
            canvas.remove();

            rendererRef.current = null;
            uniformsRef.current = null;
            meshRef.current = null;
        };

        return () => {
            cleanupRef.current?.();
            cleanupRef.current = null;
        };
    }, [
        isVisible,
        raysOrigin,
        raysColor,
        raysSpeed,
        lightSpread,
        rayLength,
        pulsating,
        fadeDistance,
        saturation,
        followMouse,
        mouseInfluence,
        noiseAmount,
        distortion,
    ]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const container = containerRef.current;

            if (!container || !rendererRef.current) {
                return;
            }

            const bounds = container.getBoundingClientRect();
            mouseRef.current = {
                x: (event.clientX - bounds.left) / bounds.width,
                y: (event.clientY - bounds.top) / bounds.height,
            };
        };

        if (!followMouse) {
            return undefined;
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [followMouse]);

    return (
        <div
            ref={containerRef}
            className={`light-rays-container ${className}`.trim()}
            aria-hidden="true"
        />
    );
}
