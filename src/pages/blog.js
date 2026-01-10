import React from 'react';
import Layout from '@theme/Layout';
import { Navbar } from '@site/src/components/new-www/ui/navbar';
import { FooterSection } from '@site/src/components/new-www/sections/footer-section';
import Link from '@docusaurus/Link';

const blogPosts = [
  {
    title: "Релиз Gml Launcher 2.0",
    date: "15 января 2026",
    excerpt: "Мы рады представить новую версию Gml Launcher с улучшенной производительностью и новыми возможностями.",
    link: "https://blog.recloud.tech/category/gml/"
  },
  {
    title: "Оптимизация производительности серверов",
    date: "10 января 2026",
    excerpt: "Советы и лучшие практики по оптимизации производительности ваших Minecraft серверов.",
    link: "https://blog.recloud.tech/category/gml/"
  },
  {
    title: "Безопасность в Gml Launcher",
    date: "5 января 2026",
    excerpt: "Обзор встроенных механизмов безопасности и рекомендации по защите вашего сервера.",
    link: "https://blog.recloud.tech/category/gml/"
  }
];

export default function Blog() {
  return (
    <Layout
      title="Блог"
      description="Новости, обновления и статьи о Gml Launcher"
      noFooter={true}>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />
        <div className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">Блог</h1>
            <p className="text-xl text-zinc-400 mb-12">
              Последние новости, обновления и полезные статьи о Gml Launcher
            </p>

            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
                  <time className="text-sm text-zinc-500">{post.date}</time>
                  <h2 className="font-display text-2xl font-bold text-zinc-100 mt-2 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-zinc-400 mb-4">{post.excerpt}</p>
                  <Link
                    href={post.link}
                    className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                    Читать далее →
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="https://blog.recloud.tech/category/gml/"
                className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors">
                Смотреть все статьи
              </Link>
            </div>
          </div>
        </div>
        <FooterSection />
      </main>
      <style jsx global>{`
        .navbar {
          display: none !important;
        }
      `}</style>
    </Layout>
  );
}
