import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@site/src/lib/utils';

interface LiquidCtaButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  theme?: "light" | "dark";
}

export function LiquidCtaButton({ children, className, onClick, theme = "dark" }: LiquidCtaButtonProps) {
  const isLight = theme === "light";

  return (
    <button
      onClick={onClick}
      className={cn("group transition-transform duration-300 hover:scale-105 active:scale-95 bg-transparent border-none", className)}
    >
      <div className={cn("rounded-full relative p-[2px] overflow-hidden", isLight && "shadow-[0_8px_20px_rgba(0,0,0,0.25)]")}>
        {/* Animated gradient border effect */}
        <div
          className="absolute inset-[-100%] rounded-full"
          style={{
            background: isLight
              ? 'conic-gradient(from 0deg, #d1d5db, #ffffff, #9ca3af, #ffffff, #d1d5db, #ffffff, #d1d5db)'
              : 'conic-gradient(from 0deg, #71717a, #d4d4d8, #52525b, #d4d4d8, #71717a, #d4d4d8, #71717a)',
            animation: 'rotate-gradient 4s linear infinite'
          }}
        />

        <div
          className={cn(
            "relative flex items-center gap-2 px-6 py-3 rounded-full",
            isLight
              ? "bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-300"
              : "bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950"
          )}
        >
          <span
            className={cn(
              "font-medium text-sm",
              isLight ? "text-zinc-900" : "text-zinc-100"
            )}
          >
            {children}
          </span>
          <ArrowRight
            className={cn(
              "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
              isLight ? "text-zinc-700" : "text-zinc-400"
            )}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate-gradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  );
}
