import React from 'react';
import Link from '@docusaurus/Link';
import { Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  product: [
    { label: "Возможности", href: "#features" },
    { label: "Тарифы", href: "#pricing" },
    { label: "История изменений", href: "https://blog.recloud.tech/category/gml/" },
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
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold font-semibold text-zinc-100">
              <img src="/img/logo-gml.svg" alt="Gml Launcher" className="h-6 w-6" />
              Gml Launcher
            </Link>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Создавайте быстрее, развертывайте эффективнее. Платформа для современных команд.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Продукт</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Gml Launcher. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/Gml-Launcher" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </Link>
            {/*<Link href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Twitter">*/}
            {/*  <Twitter className="w-5 h-5" />*/}
            {/*</Link>*/}
            {/*<Link href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="LinkedIn">*/}
            {/*  <Linkedin className="w-5 h-5" />*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
    </footer>
  )
}
