import React from 'react';
import Layout from '@theme/Layout';
import { Navbar } from '@site/src/components/new-www/ui/navbar';
import { FooterSection } from '@site/src/components/new-www/sections/footer-section';

const openPositions = [
  {
    title: "Senior Backend Developer",
    type: "Полная занятость",
    location: "Удаленно",
    description: "Разработка и оптимизация серверной части Gml Launcher"
  },
  {
    title: "Frontend Developer",
    type: "Полная занятость",
    location: "Удаленно",
    description: "Создание современного и отзывчивого пользовательского интерфейса"
  },
  {
    title: "DevOps Engineer",
    type: "Полная занятость",
    location: "Удаленно",
    description: "Управление инфраструктурой и автоматизация процессов развертывания"
  }
];

export default function Careers() {
  return (
    <Layout
      title="Карьера"
      description="Присоединяйтесь к команде Gml Launcher"
      noFooter={true}>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />
        <div className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">Карьера</h1>
            <p className="text-xl text-zinc-400 mb-12">
              Присоединяйтесь к нашей команде и помогите создавать будущее игровых лаунчеров
            </p>

            <div className="mb-16">
              <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">Почему мы?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-zinc-800 rounded-lg p-6">
                  <h3 className="font-display text-xl font-bold text-zinc-100 mb-2">Удаленная работа</h3>
                  <p className="text-zinc-400">Работайте откуда угодно, гибкий график</p>
                </div>
                <div className="border border-zinc-800 rounded-lg p-6">
                  <h3 className="font-display text-xl font-bold text-zinc-100 mb-2">Современный стек</h3>
                  <p className="text-zinc-400">Работа с передовыми технологиями</p>
                </div>
                <div className="border border-zinc-800 rounded-lg p-6">
                  <h3 className="font-display text-xl font-bold text-zinc-100 mb-2">Рост и развитие</h3>
                  <p className="text-zinc-400">Возможности для профессионального роста</p>
                </div>
                <div className="border border-zinc-800 rounded-lg p-6">
                  <h3 className="font-display text-xl font-bold text-zinc-100 mb-2">Дружная команда</h3>
                  <p className="text-zinc-400">Работа с единомышленниками</p>
                </div>
              </div>
            </div>

            <h2 className="font-display text-3xl font-bold text-zinc-100 mb-6">Открытые вакансии</h2>

            <div className="border border-zinc-800 rounded-lg p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="font-display text-2xl font-bold text-zinc-100 mb-4">
                  В данный момент мы никого не ищем
                </h3>
                <p className="text-zinc-400 mb-6">
                  На данный момент у нас нет открытых вакансий, но мы всегда рады познакомиться с талантливыми специалистами.
                  Отправьте нам свое резюме, и мы свяжемся с вами, когда появится подходящая позиция.
                </p>
                <button className="px-6 py-3 border border-zinc-700 hover:border-zinc-600 text-zinc-300 rounded-lg font-medium transition-colors">
                  Отправить резюме
                </button>
              </div>
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
