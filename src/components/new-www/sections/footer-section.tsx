import Link from "@docusaurus/Link";
import { Github } from "lucide-react";

function DiscordLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      fill="none"
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
        d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10"
      />
      <ellipse cx="71" cy="101" fill="currentColor" rx="13" ry="15" />
      <ellipse cx="121" cy="101" fill="currentColor" rx="13" ry="15" />
    </svg>
  );
}

const footerLinks = {
  product: [
    { label: "Возможности", href: "#features" },
    { label: "Тарифы", href: "#pricing" },
    {
      label: "История изменений",
      href: "https://blog.recloud.tech/category/gml/",
    },
    { label: "Документация", href: "/docs/gml-launcher/backend/installation/" },
  ],
  company: [
    { label: "О нас", href: "/about" },
    { label: "Блог", href: "https://blog.recloud.tech/category/gml/" },
    { label: "Карьера", href: "/careers" },
    { label: "Контакты", href: "/contact" },
  ],
  legal: [
    { label: "Конфиденциальность", href: "/privacy" },
    { label: "Условия", href: "/terms" },
    { label: "Безопасность", href: "/security" },
  ],
};

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg font-bold font-semibold text-zinc-100"
            >
              <img
                src="/img/logo-gml.svg"
                alt="Gml Launcher"
                className="h-6 w-6"
              />
              Gml Launcher
            </Link>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Open-source инструменты для создания, публикации и поддержки
              Minecraft-лаунчеров.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">
              Продукт
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">
              Компания
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">
              Правовая информация
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Gml Launcher. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Gml-Launcher"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://discord.gg/4CuaMhnA84"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
              aria-label="Discord"
            >
              <DiscordLogo className="w-6 h-6" />
            </Link>
            {/*<Link href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Twitter">*/}
            {/*  <Twitter className="w-5 h-5" />*/}
            {/*</Link>*/}
            {/*<Link href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="LinkedIn">*/}
            {/*  <Linkedin className="w-5 h-5" />*/}
            {/*</Link>*/}
          </div>
        </div>
        <p className="mx-auto max-w-3xl text-center !text-[10px] mt-3 leading-relaxed text-zinc-700">
          Gml Launcher — независимый проект и не является официальным продуктом
          Minecraft. Проект не одобрен, не поддерживается и не связан с Mojang
          Studios или Microsoft. Minecraft является товарным знаком Microsoft
          Corporation.
        </p>
      </div>
    </footer>
  );
}
