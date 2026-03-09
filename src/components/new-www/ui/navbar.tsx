import React from 'react';
import Link from '@docusaurus/Link';

const navLinks = [
  { href: "#features", label: "Возможности" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#pricing", label: "Тарифы" },
  { href: "https://github.com/Gml-Launcher", label: "GitHub" },
  { href: "https://blog.recloud.tech/category/gml/", label: "Блог" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-zinc-900/70 border border-zinc-800/50 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold font-semibold text-zinc-100">
          <img src="/img/logo-gml.svg" alt="Gml Launcher" className="h-6 w-6" />
          Gml Launcher
        </Link>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-zinc-400 hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/docs/gml-launcher/backend/installation/"
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors"
          >
            Начать
          </Link>
        </div>
      </nav>
    </header>
  )
}
