import React, { useEffect, useRef, useState } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { AlertCircle, ArrowRight, Check, Copy } from "lucide-react";
import { LiquidCtaButton } from "../buttons/liquid-cta-button";

type CopyStatus = "idle" | "copied" | "error";

export function CtaSection() {
  const { siteConfig } = useDocusaurusContext();
  const [origin, setOrigin] = useState(() => siteConfig.url.replace(/\/$/, ""));
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const resetTimer = useRef<number | undefined>(undefined);
  const installCommand = `curl -fsSL ${origin}/install.sh | sudo sh`;

  useEffect(() => {
    setOrigin(window.location.origin);

    return () => {
      if (resetTimer.current !== undefined) {
        window.clearTimeout(resetTimer.current);
      }
    };
  }, []);

  const copyCommand = async () => {
    if (resetTimer.current !== undefined) {
      window.clearTimeout(resetTimer.current);
    }

    try {
      let copied = false;

      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(installCommand);
          copied = true;
        } catch {
          // Fall back to execCommand when Clipboard API access is denied.
        }
      }

      if (!copied) {
        const textarea = document.createElement("textarea");
        textarea.value = installCommand;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();

        copied = document.execCommand("copy");
        textarea.remove();

        if (!copied) {
          throw new Error("Copy command failed");
        }
      }

      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }

    resetTimer.current = window.setTimeout(() => {
      setCopyStatus("idle");
      resetTimer.current = undefined;
    }, 2000);
  };

  const copyLabel =
    copyStatus === "copied"
      ? "Скопировано"
      : copyStatus === "error"
        ? "Не удалось скопировать"
        : "Копировать";

  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
          Готовы начать?
        </h2>
        <p className="text-lg text-zinc-500 mb-10 text-balance">
          Разверните Gml Launcher на своём сервере, настройте первую игровую
          сборку и опубликуйте клиент для игроков.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/docs/gml-launcher/backend/installation/">
            <LiquidCtaButton>Установка</LiquidCtaButton>
          </Link>
          <Link
            href="/docs/welcome"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>Документация</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="mt-8 inline-flex max-w-full flex-col">
          <div className="flex items-center my-2 gap-4" aria-hidden="true">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="shrink-0 text-xs font-medium tracking-wider text-zinc-600">
              или быстрая установка
            </span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          <div className="mt-6 flex w-full overflow-hidden rounded-xl border border-solid border-zinc-800 bg-zinc-900/60">
            <div className="flex min-w-0 items-center gap-3 overflow-x-auto px-4 py-2.5 text-left">
              <span className="select-none font-mono text-sm text-zinc-600" aria-hidden="true">
                $
              </span>
              <code className="whitespace-nowrap font-mono text-sm px-2 text-zinc-300">
                {installCommand}
              </code>
            </div>
            <button
              type="button"
              onClick={copyCommand}
              aria-label={copyLabel}
              title={copyLabel}
              className="flex w-11 shrink-0 cursor-pointer items-center justify-center border-0 border-l border-solid border-zinc-800 bg-zinc-900 p-0 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
            >
              {copyStatus === "copied" ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : copyStatus === "error" ? (
                <AlertCircle className="h-4 w-4 text-red-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only" aria-live="polite">
                {copyLabel}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
