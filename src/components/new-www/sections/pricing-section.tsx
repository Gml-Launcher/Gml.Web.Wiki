import React from 'react';
import { Check } from 'lucide-react';
import Link from '@docusaurus/Link';

const plans = [
  {
    name: "Начальный",
    description: "Идеально для любых типов проектов и команд",
    price: "0₽",
    link: "/docs/gml-launcher/backend/installation/",
    period: "навсегда",
    features: [
      "∞ Игровых профилей",
      "∞ Пользователей",
      "∞ Администраторов",
      "∞ Игроков",
      "Любые игровые версии и ядра",
      "Сборка через панель",
      "Поддержка сообщества"
    ],
    cta: "Начать",
    highlighted: false,
  },
  {
    name: "Профессиональный",
    link: "https://blog.recloud.tech/product/gml-pro-месяц/",
    description: "Для команд, без собственной инфраструктуры",
    price: "2499₽",
    period: "/неделя",
    features: [
      "Всё из начального тарифа",
      "Готовое облачное решение",
      "12ГБ RAM",
      "100ГБ хранилища",
      "Полная кастомизация стилей лаунчера",
      "Упаковка в .msi, .deb, .dmg, .app",
      "Расширенная аналитика",
      "Приоритетная поддержка",
      "Приоритетная реализация нового функционала",
      "Пользовательские интеграции",
      "Доступ к API",
    ],
    cta: "Оформить заказ",
    highlighted: true,
  },
  {
    name: "Корпоративный",
    description: "Для крупных команд с индивидуальными потребностями",
    price: "Индивидуально",
    period: "",
    features: [
      "Всё из Профессионального",
      "Персональный менеджер",
      "Индивидуальное SLA",
      "Развертывание на собственных серверах",
      "Неограниченное хранилище",
      "Расширенная безопасность",
      "Обучение и адаптация",
    ],
    cta: "Связаться с отделом продаж",
    highlighted: false,
    // link отсутствует - кнопка будет открывать чат
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Тарифы</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Простые и прозрачные цены
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
            Никаких скрытых платежей. Никаких сюрпризов. Выберите подходящий вам тариф.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border flex flex-col h-full ${
                plan.highlighted ? "bg-zinc-100 border-zinc-100" : "bg-zinc-900/50 border-zinc-800/50"
              }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`font-heading text-xl font-semibold mb-2 ${
                    plan.highlighted ? "text-zinc-900" : "text-zinc-100"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`font-display text-3xl font-bold ${plan.highlighted ? "text-zinc-900" : "text-zinc-100"}`}
                >
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1 p-0">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-zinc-900" : "text-zinc-400"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-zinc-700" : "text-zinc-400"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.link ? (
                <Link
                  href={plan.link}
                  className={`block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto ${
                    plan.highlighted
                      ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                      : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              ) : (
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.amoSocialButton) {
                      window.amoSocialButton('runChatShow');
                    }
                  }}
                  className={`border-none block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto ${
                    plan.highlighted
                      ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                      : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                  }`}
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
