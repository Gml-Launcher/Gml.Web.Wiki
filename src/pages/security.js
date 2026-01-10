import React from 'react';
import Layout from '@theme/Layout';
import { Navbar } from '@site/src/components/new-www/ui/navbar';
import { FooterSection } from '@site/src/components/new-www/sections/footer-section';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function Security() {
  return (
    <Layout
      title="Безопасность"
      description="Информация о безопасности Gml Launcher"
      noFooter={true}>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />
        <div className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">Безопасность</h1>
            <p className="text-xl text-zinc-400 mb-12">
              Безопасность ваших данных и серверов — наш главный приоритет
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-600/10 rounded-lg">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-zinc-100">Шифрование данных</h2>
                </div>
                <p className="text-zinc-400">
                  Все данные передаются по защищенным каналам с использованием TLS 1.3
                </p>
              </div>

              <div className="border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-600/10 rounded-lg">
                    <Lock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-zinc-100">Защита учетных записей</h2>
                </div>
                <p className="text-zinc-400">
                  Двухфакторная аутентификация и безопасное хранение паролей
                </p>
              </div>

              <div className="border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-600/10 rounded-lg">
                    <Eye className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-zinc-100">Аудит безопасности</h2>
                </div>
                <p className="text-zinc-400">
                  Регулярные проверки безопасности и обновления системы
                </p>
              </div>

              <div className="border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-600/10 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-zinc-100">Мониторинг угроз</h2>
                </div>
                <p className="text-zinc-400">
                  Круглосуточный мониторинг и защита от DDoS атак
                </p>
              </div>
            </div>

            <div className="prose prose-invert prose-zinc max-w-none space-y-8">
              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">Наши меры безопасности</h2>
                <p className="text-zinc-400">
                  Gml Launcher использует многоуровневый подход к безопасности для защиты ваших данных и серверов:
                </p>
                <ul className="text-zinc-400 space-y-2 list-disc list-inside mt-4">
                  <li>Шифрование всех передаваемых данных с использованием современных протоколов</li>
                  <li>Регулярные обновления безопасности и исправление уязвимостей</li>
                  <li>Изоляция серверов и контейнеризация процессов</li>
                  <li>Резервное копирование данных и планы восстановления</li>
                  <li>Логирование и мониторинг всех критических операций</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">Сообщить об уязвимости</h2>
                <p className="text-zinc-400 mb-4">
                  Мы ценим помощь исследователей безопасности в обнаружении и устранении уязвимостей. Если вы обнаружили проблему безопасности в Gml Launcher, пожалуйста, сообщите нам об этом ответственным образом.
                </p>
                <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
                  <h3 className="font-display text-xl font-bold text-zinc-100 mb-3">Процесс раскрытия информации:</h3>
                  <ol className="text-zinc-400 space-y-2 list-decimal list-inside">
                    <li>Отправьте подробное описание уязвимости на <a href="mailto:security@gml-launcher.com" className="text-emerald-400 hover:text-emerald-300">security@gml-launcher.com</a></li>
                    <li>Дождитесь подтверждения получения (в течение 48 часов)</li>
                    <li>Мы проанализируем проблему и свяжемся с вами для уточнения деталей</li>
                    <li>После исправления уязвимости мы опубликуем информацию и поблагодарим вас (если вы не против)</li>
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">Рекомендации по безопасности</h2>
                <p className="text-zinc-400 mb-4">Чтобы обеспечить максимальную безопасность ваших серверов:</p>
                <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                  <li>Используйте сложные и уникальные пароли</li>
                  <li>Включите двухфакторную аутентификацию</li>
                  <li>Регулярно обновляйте Gml Launcher до последней версии</li>
                  <li>Ограничьте доступ к административным функциям</li>
                  <li>Настройте файрвол и правила доступа</li>
                  <li>Регулярно создавайте резервные копии</li>
                  <li>Мониторьте логи на предмет подозрительной активности</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">Сертификаты и соответствие</h2>
                <p className="text-zinc-400">
                  Gml Launcher соответствует современным стандартам безопасности и регулярно проходит независимые аудиты. Мы следуем лучшим практикам индустрии и рекомендациям OWASP.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl font-bold text-zinc-100 mb-4">История обновлений безопасности</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <p className="text-sm text-zinc-500">10 января 2026</p>
                    <p className="text-zinc-300 font-medium">Обновление системы аутентификации</p>
                    <p className="text-zinc-400 text-sm mt-1">Улучшена защита от брутфорс атак</p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <p className="text-sm text-zinc-500">5 января 2026</p>
                    <p className="text-zinc-300 font-medium">Исправление уязвимости в API</p>
                    <p className="text-zinc-400 text-sm mt-1">Закрыта потенциальная возможность SQL-инъекции</p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <p className="text-sm text-zinc-500">1 января 2026</p>
                    <p className="text-zinc-300 font-medium">Обновление зависимостей</p>
                    <p className="text-zinc-400 text-sm mt-1">Обновлены все библиотеки до актуальных версий</p>
                  </div>
                </div>
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
