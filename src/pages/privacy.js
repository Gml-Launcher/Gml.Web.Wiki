import React from 'react';
import Layout from '@theme/Layout';
import { Navbar } from '@site/src/components/new-www/ui/navbar';
import { FooterSection } from '@site/src/components/new-www/sections/footer-section';

export default function Privacy() {
  return (
    <Layout
      title="Политика конфиденциальности"
      description="Политика конфиденциальности Gml Launcher"
      noFooter={true}>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />
        <div className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
              Политика конфиденциальности
            </h1>
            <p className="text-zinc-400 mb-12">Последнее обновление: 10 января 2026</p>

            <div className="prose prose-invert prose-zinc max-w-none space-y-8">
              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">1. Введение</h2>
                <p className="text-zinc-400">
                  Настоящая Политика конфиденциальности описывает, как Gml Launcher собирает, использует и защищает вашу личную информацию при использовании нашего программного обеспечения и сервисов.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">2. Какую информацию мы собираем</h2>
                <p className="text-zinc-400 mb-3">Мы можем собирать следующие виды информации:</p>
                <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                  <li>Информация об учетной записи (имя пользователя, email)</li>
                  <li>Техническая информация (версия лаунчера, операционная система)</li>
                  <li>Данные об использовании (логи, статистика запусков)</li>
                  <li>Информация о сервере (настройки, конфигурация)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">3. Как мы используем информацию</h2>
                <p className="text-zinc-400 mb-3">Собранная информация используется для:</p>
                <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                  <li>Предоставления и улучшения наших сервисов</li>
                  <li>Технической поддержки пользователей</li>
                  <li>Анализа производительности и стабильности</li>
                  <li>Обеспечения безопасности</li>
                  <li>Уведомления об обновлениях</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">4. Защита данных</h2>
                <p className="text-zinc-400">
                  Мы применяем современные методы шифрования и безопасности для защиты ваших данных. Доступ к личной информации имеют только авторизованные сотрудники, которым это необходимо для выполнения их обязанностей.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">5. Передача данных третьим лицам</h2>
                <p className="text-zinc-400">
                  Мы не продаем и не передаем ваши личные данные третьим лицам, за исключением случаев, когда это необходимо для предоставления наших сервисов (например, хостинг-провайдеры) или требуется по закону.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">6. Cookies и аналитика</h2>
                <p className="text-zinc-400">
                  Мы используем cookies и аналогичные технологии для улучшения работы сайта и анализа его использования. Вы можете отключить cookies в настройках вашего браузера.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">7. Ваши права</h2>
                <p className="text-zinc-400 mb-3">Вы имеете право:</p>
                <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                  <li>Запросить доступ к вашим личным данным</li>
                  <li>Исправить неточные данные</li>
                  <li>Удалить ваши данные</li>
                  <li>Ограничить обработку данных</li>
                  <li>Экспортировать ваши данные</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">8. Изменения в политике</h2>
                <p className="text-zinc-400">
                  Мы можем обновлять эту Политику конфиденциальности время от времени. Об изменениях мы будем уведомлять через наш сайт и по электронной почте.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">9. Контакты</h2>
                <p className="text-zinc-400">
                  Если у вас есть вопросы о нашей Политике конфиденциальности, свяжитесь с нами по адресу{' '}
                  <a href="mailto:privacy@gml-launcher.com" className="text-emerald-400 hover:text-emerald-300">
                    privacy@gml-launcher.com
                  </a>
                </p>
              </section>
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
