import React from 'react';
import Layout from '@theme/Layout';
import { Navbar } from '@site/src/components/new-www/ui/navbar';
import { FooterSection } from '@site/src/components/new-www/sections/footer-section';

export default function About() {
  return (
    <Layout
      title="О нас"
      description="Узнайте больше о Gml Launcher и нашей миссии"
      noFooter={true}>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />
        <div className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-6">О нас</h1>

            <div className="prose prose-invert prose-zinc max-w-none">
              <p className="text-xl text-zinc-400 mb-8">
                Gml Launcher — это современная платформа для запуска и управления Minecraft серверами, созданная с заботой о производительности и удобстве.
              </p>

              <h2 className="font-display text-3xl font-bold text-zinc-100 mt-12 mb-4">Наша миссия</h2>
              <p className="text-zinc-400 mb-6">
                Мы стремимся сделать запуск и управление игровыми серверами максимально простым и доступным для каждого. Наша цель — предоставить инструменты, которые позволят сосредоточиться на создании уникального игрового опыта, а не на технических сложностях.
              </p>

              <h2 className="font-display text-3xl font-bold text-zinc-100 mt-12 mb-4">Наши ценности</h2>
              <ul className="text-zinc-400 space-y-4 mb-6">
                <li><strong className="text-zinc-300">Простота:</strong> Интуитивно понятный интерфейс и продуманная архитектура</li>
                <li><strong className="text-zinc-300">Производительность:</strong> Оптимизация на всех уровнях для максимальной скорости</li>
                <li><strong className="text-zinc-300">Надежность:</strong> Стабильная работа и регулярные обновления</li>
                <li><strong className="text-zinc-300">Открытость:</strong> Подробная документация и активное сообщество</li>
              </ul>

              <h2 className="font-display text-3xl font-bold text-zinc-100 mt-12 mb-4">Команда</h2>
              <p className="text-zinc-400 mb-6">
                Gml Launcher разрабатывается командой энтузиастов, которые сами являются активными игроками и администраторами серверов. Мы понимаем ваши потребности, потому что сталкиваемся с теми же задачами каждый день.
              </p>
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
