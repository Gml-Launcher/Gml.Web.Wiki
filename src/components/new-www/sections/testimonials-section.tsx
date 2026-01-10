import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsColumn } from '../ui/testimonials-column';

const testimonials = [
  {
    text: "Оставьте свой отзыв в нашем Discord, и мы его опубликуем. Ваше мнение важно для нас и помогает сделать продукт лучше. Присоединяйтесь к нашему сообществу, делитесь впечатлениями, и ваш отзыв может стать частью этой страницы!",
    image: "https://avatars.githubusercontent.com/u/111225722?s=400&u=f3078227ea528ed13b358369f57addcc3ef39235&v=4",
    name: "Антон Терентьев",
    role: "PM проекта",
  },
  {
    text: "Оставьте свой отзыв в нашем Discord, и мы его опубликуем. Ваше мнение важно для нас и помогает сделать продукт лучше. Присоединяйтесь к нашему сообществу, делитесь впечатлениями, и ваш отзыв может стать частью этой страницы!",
    image: "https://avatars.githubusercontent.com/u/111225722?s=400&u=f3078227ea528ed13b358369f57addcc3ef39235&v=4",
    name: "Антон Терентьев",
    role: "PM проекта",
  },
  {
    text: "Оставьте свой отзыв в нашем Discord, и мы его опубликуем. Ваше мнение важно для нас и помогает сделать продукт лучше. Присоединяйтесь к нашему сообществу, делитесь впечатлениями, и ваш отзыв может стать частью этой страницы!",
    image: "https://avatars.githubusercontent.com/u/111225722?s=400&u=f3078227ea528ed13b358369f57addcc3ef39235&v=4",
    name: "Антон Терентьев",
    role: "PM проекта",
  },
  {
    text: "Оставьте свой отзыв в нашем Discord, и мы его опубликуем. Ваше мнение важно для нас и помогает сделать продукт лучше. Присоединяйтесь к нашему сообществу, делитесь впечатлениями, и ваш отзыв может стать частью этой страницы!",
    image: "https://avatars.githubusercontent.com/u/111225722?s=400&u=f3078227ea528ed13b358369f57addcc3ef39235&v=4",
    name: "Антон Терентьев",
    role: "PM проекта",
  },
  {
    text: "Оставьте свой отзыв в нашем Discord, и мы его опубликуем. Ваше мнение важно для нас и помогает сделать продукт лучше. Присоединяйтесь к нашему сообществу, делитесь впечатлениями, и ваш отзыв может стать частью этой страницы!",
    image: "https://avatars.githubusercontent.com/u/111225722?s=400&u=f3078227ea528ed13b358369f57addcc3ef39235&v=4",
    name: "Антон Терентьев",
    role: "PM проекта",
  },
  {
    text: "Оставьте свой отзыв в нашем Discord, и мы его опубликуем. Ваше мнение важно для нас и помогает сделать продукт лучше. Присоединяйтесь к нашему сообществу, делитесь впечатлениями, и ваш отзыв может стать частью этой страницы!",
    image: "https://avatars.githubusercontent.com/u/111225722?s=400&u=f3078227ea528ed13b358369f57addcc3ef39235&v=4",
    name: "Антон Терентьев",
    role: "PM проекта",
  },
  {
    text: "Оставьте свой отзыв в нашем Discord, и мы его опубликуем. Ваше мнение важно для нас и помогает сделать продукт лучше. Присоединяйтесь к нашему сообществу, делитесь впечатлениями, и ваш отзыв может стать частью этой страницы!",
    image: "https://avatars.githubusercontent.com/u/111225722?s=400&u=f3078227ea528ed13b358369f57addcc3ef39235&v=4",
    name: "Антон Терентьев",
    role: "PM проекта",
  },
  {
    text: "Оставьте свой отзыв в нашем Discord, и мы его опубликуем. Ваше мнение важно для нас и помогает сделать продукт лучше. Присоединяйтесь к нашему сообществу, делитесь впечатлениями, и ваш отзыв может стать частью этой страницы!",
    image: "https://avatars.githubusercontent.com/u/111225722?s=400&u=f3078227ea528ed13b358369f57addcc3ef39235&v=4",
    name: "Антон Терентьев",
    role: "PM проекта",
  },
  {
    text: "Оставьте свой отзыв в нашем Discord, и мы его опубликуем. Ваше мнение важно для нас и помогает сделать продукт лучше. Присоединяйтесь к нашему сообществу, делитесь впечатлениями, и ваш отзыв может стать частью этой страницы!",
    image: "https://avatars.githubusercontent.com/u/111225722?s=400&u=f3078227ea528ed13b358369f57addcc3ef39235&v=4",
    name: "Антон Терентьев",
    role: "PM проекта",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["TechCorp", "Innovate", "NextGen", "Quantum", "Velocity", "Apex"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Отзывы</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Что говорят наши пользователи
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Узнайте, что говорят о нас наши клиенты.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        {/*<div className="mt-16 pt-16 border-t border-zinc-800/50">*/}
        {/*  <p className="text-center text-sm text-zinc-500 mb-8">Нам доверяют лидеры индустрии</p>*/}
        {/*  <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">*/}
        {/*    <motion.div*/}
        {/*      className="flex gap-12 md:gap-16"*/}
        {/*      animate={{*/}
        {/*        x: ["0%", "-50%"],*/}
        {/*      }}*/}
        {/*      transition={{*/}
        {/*        x: {*/}
        {/*          duration: 20,*/}
        {/*          repeat: Number.POSITIVE_INFINITY,*/}
        {/*          ease: "linear",*/}
        {/*        },*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      /!* Duplicate logos for seamless loop *!/*/}
        {/*      {[...logos, ...logos].map((logo, index) => (*/}
        {/*        <span*/}
        {/*          key={`${logo}-${index}`}*/}
        {/*          className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"*/}
        {/*        >*/}
        {/*          {logo}*/}
        {/*        </span>*/}
        {/*      ))}*/}
        {/*    </motion.div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  )
}
