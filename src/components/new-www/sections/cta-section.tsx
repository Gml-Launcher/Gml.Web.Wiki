import React from "react";
import Link from "@docusaurus/Link";
import { ArrowRight } from "lucide-react";
import { LiquidCtaButton } from "../buttons/liquid-cta-button";

export function CtaSection() {
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
      </div>
    </section>
  );
}
