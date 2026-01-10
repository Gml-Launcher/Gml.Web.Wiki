import React from 'react';
import Layout from '@theme/Layout';
import { Navbar } from '@site/src/components/new-www/ui/navbar';
import { FooterSection } from '@site/src/components/new-www/sections/footer-section';

export default function Terms() {
  return (
    <Layout
      title="Условия использования"
      description="Условия использования Gml Launcher"
      noFooter={true}>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />
        <div className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
              Условия использования
            </h1>
            <p className="text-zinc-400 mb-12">Последнее обновление: 10 января 2026</p>

            <div className="prose prose-invert prose-zinc max-w-none space-y-8">
              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">1. Принятие условий</h2>
                <p className="text-zinc-400">
                  Используя Gml Launcher, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны с какими-либо условиями, пожалуйста, не используйте наше программное обеспечение.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">2. Лицензия на использование</h2>
                <p className="text-zinc-400">
                  Gml Launcher предоставляется по лицензии с открытым исходным кодом. Вы можете свободно использовать, модифицировать и распространять программное обеспечение в соответствии с условиями лицензии.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">3. Разрешенное использование</h2>
                <p className="text-zinc-400 mb-3">Вы можете использовать Gml Launcher для:</p>
                <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                  <li>Запуска и управления Minecraft серверами</li>
                  <li>Персональных и коммерческих проектов</li>
                  <li>Образовательных целей</li>
                  <li>Разработки дополнений и модификаций</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">4. Запрещенное использование</h2>
                <p className="text-zinc-400 mb-3">Запрещается:</p>
                <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                  <li>Использовать ПО для незаконных целей</li>
                  <li>Нарушать права интеллектуальной собственности</li>
                  <li>Распространять вредоносное ПО</li>
                  <li>Пытаться получить несанкционированный доступ к системам</li>
                  <li>Использовать ПО для DDoS атак или спама</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">5. Учетные записи</h2>
                <p className="text-zinc-400">
                  Вы несете ответственность за безопасность вашей учетной записи и всех действий, совершенных под вашей учетной записью. Немедленно сообщите нам о любом несанкционированном использовании.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">6. Отказ от гарантий</h2>
                <p className="text-zinc-400">
                  Gml Launcher предоставляется "как есть", без каких-либо гарантий. Мы не гарантируем, что программное обеспечение будет работать без ошибок или соответствовать вашим конкретным требованиям.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">7. Ограничение ответственности</h2>
                <p className="text-zinc-400">
                  Мы не несем ответственности за любые прямые, косвенные, случайные или последующие убытки, возникшие в результате использования или невозможности использования Gml Launcher.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">8. Обновления и изменения</h2>
                <p className="text-zinc-400">
                  Мы оставляем за собой право изменять, обновлять или прекращать предоставление Gml Launcher в любое время. Мы постараемся уведомить пользователей о значительных изменениях заранее.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">9. Интеллектуальная собственность</h2>
                <p className="text-zinc-400">
                  Все права на товарные знаки, логотипы и фирменный стиль Gml Launcher принадлежат их владельцам. Использование этих материалов без разрешения запрещено.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">10. Применимое право</h2>
                <p className="text-zinc-400">
                  Настоящие Условия регулируются законодательством Российской Федерации. Все споры подлежат разрешению в соответствующих судах.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">11. Контакты</h2>
                <p className="text-zinc-400">
                  По вопросам, связанным с настоящими Условиями, обращайтесь по адресу{' '}
                  <a href="mailto:legal@gml-launcher.com" className="text-emerald-400 hover:text-emerald-300">
                    legal@gml-launcher.com
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
