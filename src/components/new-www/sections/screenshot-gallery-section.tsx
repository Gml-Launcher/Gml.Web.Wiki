import React, { useCallback, useState } from "react";
import {
  AnimatePresence,
  motion,
  type PanInfo,
  useReducedMotion,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

const screenshots = [
  {
    src: "/img/gml_app_create_1.png",
    width: 1919,
    height: 927,
    title: "Единая панель управления",
    description:
      "Управляйте проектами, приложениями и доступом из одного интерфейса.",
    alt: "Панель Gml Frontend со списком приложений и настройками проекта",
  },
  {
    src: "/img/server-create.png",
    width: 1243,
    height: 740,
    title: "Управление игровыми серверами",
    description:
      "Добавляйте серверы к профилям и настраивайте подключение игроков.",
    alt: "Панель Gml Frontend с настройками игрового сервера Minecraft",
  },
  {
    src: "/img/gml-integrations-news-vk-4.png",
    width: 1460,
    height: 917,
    title: "Настройка интеграций",
    description:
      "Подключайте внешние сервисы и управляйте их параметрами в одном месте.",
    alt: "Экран настройки интеграции Gml Frontend с параметрами подключения",
  },
  {
    src: "/img/launcher-panel-build-publish.png",
    width: 806,
    height: 601,
    title: "Сборка и публикация",
    description:
      "Готовьте обновления лаунчера и публикуйте новые версии для игроков.",
    alt: "Форма сборки и публикации обновления Gml Launcher",
  },
] as const;

const normalizeIndex = (index: number) =>
  (index + screenshots.length) % screenshots.length;

export function ScreenshotGallerySection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const showPrevious = useCallback(() => {
    setDirection(-1);
    setActiveIndex((currentIndex) => normalizeIndex(currentIndex - 1));
  }, []);

  const showNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((currentIndex) => normalizeIndex(currentIndex + 1));
  }, []);

  const selectScreenshot = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex) {
        return;
      }

      setDirection(nextIndex > activeIndex ? 1 : -1);
      setActiveIndex(nextIndex);
    },
    [activeIndex],
  );

  const handleDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const swipeDistance = 60;
      const swipeVelocity = 500;

      if (
        info.offset.x <= -swipeDistance ||
        info.velocity.x <= -swipeVelocity
      ) {
        showNext();
      } else if (
        info.offset.x >= swipeDistance ||
        info.velocity.x >= swipeVelocity
      ) {
        showPrevious();
      }
    },
    [showNext, showPrevious],
  );

  const activeScreenshot = screenshots[activeIndex];
  const motionTransition = shouldReduceMotion
    ? { duration: 0.15 }
    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      id="product-showcase"
      className="relative overflow-hidden bg-zinc-900/20 px-6 py-12 md:py-16"
      aria-labelledby="product-showcase-title"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-zinc-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={motionTransition}
          className="mb-8 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
            Продукт в действии
          </p>
          <h2
            id="product-showcase-title"
            className="font-display mb-4 text-3xl font-bold text-zinc-100 md:text-4xl"
          >
            Всё управление — в одной панели
          </h2>
          <p className="text-balance mx-auto max-w-xl text-zinc-500">
            Работайте со сборками, серверами и интеграциями через единый
            понятный интерфейс.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 24,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            ...motionTransition,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="min-w-0"
        >
          <div
            className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/50 shadow-2xl shadow-black/30 outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950"
            role="region"
            aria-roledescription="карусель"
            aria-label="Скриншоты панели Gml Launcher"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                showPrevious();
              } else if (event.key === "ArrowRight") {
                event.preventDefault();
                showNext();
              }
            }}
          >
            <div className="flex h-10 items-center justify-between border-b border-zinc-800/60 bg-zinc-900/80 px-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Images className="h-3.5 w-3.5" aria-hidden="true" />
                <span>
                  {activeIndex + 1} / {screenshots.length}
                </span>
              </div>
            </div>

            <div
              className="relative aspect-video overflow-hidden bg-zinc-950/70"
              role="group"
              aria-roledescription="слайд"
              aria-label={`${activeIndex + 1} из ${screenshots.length}`}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-800/10 via-transparent to-black/20" />
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeScreenshot.src}
                  custom={direction}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: direction > 0 ? 48 : -48,
                          scale: 0.985,
                        }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, x: 0, scale: 1 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: direction > 0 ? -48 : 48,
                          scale: 0.985,
                        }
                  }
                  transition={motionTransition}
                  drag={shouldReduceMotion ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 flex cursor-grab items-center justify-center p-2 active:cursor-grabbing md:p-5"
                >
                  <img
                    src={activeScreenshot.src}
                    width={activeScreenshot.width}
                    height={activeScreenshot.height}
                    alt={activeScreenshot.alt}
                    draggable={false}
                    decoding="async"
                    className="max-h-full max-w-full select-none rounded-lg border border-zinc-800/70 object-contain shadow-2xl shadow-black/50"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-4 border-t border-zinc-800/60 bg-zinc-900/70 p-4 md:flex-row md:items-center md:justify-between md:px-5">
              <div aria-live="polite" aria-atomic="true">
                <h3 className="font-display mb-1 text-lg font-semibold text-zinc-100">
                  {activeScreenshot.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-zinc-500">
                  {activeScreenshot.description}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700/70 bg-zinc-800/70 text-zinc-400 transition-colors hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
                  aria-label="Предыдущий скриншот"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700/70 bg-zinc-800/70 text-zinc-400 transition-colors hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
                  aria-label="Следующий скриншот"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div
            className="mt-3 flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:overflow-visible md:pb-0"
            role="group"
            aria-label="Выбор скриншота"
          >
            {screenshots.map((screenshot, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={screenshot.src}
                  type="button"
                  aria-pressed={isActive}
                  aria-label={`Показать: ${screenshot.title}`}
                  onClick={() => selectScreenshot(index)}
                  className={`group min-w-[64%] snap-start overflow-hidden rounded-2xl border p-1.5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 md:min-w-0 ${
                    isActive
                      ? "border-zinc-600 bg-zinc-800/80"
                      : "border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/70"
                  }`}
                >
                  <span className="block aspect-[16/9] overflow-hidden rounded-xl bg-zinc-950/80">
                    <img
                      src={screenshot.src}
                      width={screenshot.width}
                      height={screenshot.height}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className={`h-full w-full object-cover transition duration-300 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-55 grayscale group-hover:opacity-90 group-hover:grayscale-0"
                      }`}
                    />
                  </span>
                  <span
                    className={`mt-2 block truncate px-1 text-xs font-medium transition-colors ${
                      isActive
                        ? "text-zinc-200"
                        : "text-zinc-500 group-hover:text-zinc-300"
                    }`}
                  >
                    {screenshot.title}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
