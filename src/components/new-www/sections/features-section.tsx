import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  BarChart3,
  Layers,
  ArrowRight,
  Command,
  User,
  Users,
  Puzzle,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { News16Filled } from "@fluentui/react-icons";

const integrationLogos = [
  { name: "Tool 1" },
  { name: "Tool 2" },
  { name: "Tool 3" },
  { name: "Tool 4" },
  { name: "Tool 5" },
  { name: "Tool 6" },
  { name: "Tool 7" },
  { name: "Tool 8" },
];

const modLoaderLogos = [
  {
    name: "Fabric",
    src: "/img/modloaders/fabric.png",
    href: "https://fabricmc.net/",
  },
  {
    name: "Quilt",
    src: "/img/modloaders/quilt.svg",
    href: "https://quiltmc.org/",
  },
  {
    name: "Forge",
    src: "/img/modloaders/forge.png",
    href: "https://files.minecraftforge.net/",
  },
  {
    name: "NeoForge",
    src: "/img/modloaders/neoforge.png",
    href: "https://neoforged.net/",
  },
  {
    name: "LiteLoader",
    src: "/img/modloaders/liteloader.ico",
    href: "https://www.liteloader.com/",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Возможности
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Всё необходимое для вашего лаунчера
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">
            Управляйте пользователями, игровыми сборками, обновлениями и интеграциями в одном месте.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    whileHover={{ y: -2 }}
                  >
                    <Users className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">
                    Пользователи и авторизация
                  </p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Управляйте регистрацией и профилями игроков через собственную
                  серверную часть. Подключайте дополнительные способы
                  авторизации и контролируйте доступ к игровым проектам.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    whileHover={{ y: -2 }}
                  >
                    <News16Filled className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">
                    Новости и состояние серверов
                  </p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Публикуйте новости проекта и показывайте статус игровых
                  серверов прямо в лаунчере.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    whileHover={{ y: -2 }}
                  >
                    <Zap className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">
                    Авто-обновления
                  </p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Автоматическое обновление лаунчера и игровых клиентов
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    whileHover={{ y: -2 }}
                  >
                    <Command className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">
                    Кроссплатформенный и мультиязычный лаунчер
                  </p>
                </div>

                <p className="text-zinc-500 text-sm mb-5">
                  Работает на разных операционных системах и поддерживает
                  несколько языков интерфейса.
                </p>

                <div className="flex justify-center gap-2 mt-auto">
                  {["Windows", "macOS", "Linux"].map((platform, i) => (
                    <motion.div
                      key={platform}
                      className="flex items-center justify-center px-4 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/50 shadow-lg"
                      initial={{ opacity: 0, y: 14, scale: 0.92 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 20,
                        delay: 0.12 + i * 0.1,
                      }}
                      whileHover={{
                        y: -3,
                        scale: 1.04,
                        borderColor: "rgb(113 113 122)",
                        transition: { duration: 0.15 },
                      }}
                    >
                      <span className="text-zinc-300 font-mono text-sm">
                        {platform}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Puzzle className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">
                    Большой выбор загрузчиков модификаций
                  </p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Запускайте сборки на Fabric, Quilt, Forge, NeoForge и
                  LiteLoader.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto mx-auto">
                  {modLoaderLogos.map((logo, i) => (
                    <motion.a
                      key={logo.name}
                      className="flex items-center justify-center px-4 h-14 rounded-xl bg-zinc-800/80 border border-zinc-700/50 shadow-lg"
                      initial={{ y: 0 }}
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.15,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                      }}
                      whileHover={{ scale: 1.1, y: -4 }}
                    >
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        loading="lazy"
                        className="h-7 w-7 object-contain"
                      />
                    </motion.a>
                  ))}
                </div>
                {/*<motion.button*/}
                {/*  whileHover={{ x: 6 }}*/}
                {/*  className="mt-4 flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"*/}
                {/*>*/}
                {/*  Посмотреть все интеграции <ArrowRight className="w-4 h-4" />*/}
                {/*</motion.button>*/}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Layers className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">
                    Больше 10 интеграций
                  </p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Ключевые интеграции по выводу новостей, мониторингу, анализу,
                  интеграции с Discord, Telegram, Вконтакте, Sentry и многое
                  другое
                </p>
                {/* <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mt-auto">
                  {integrationLogos.map((logo, i) => (
                    <motion.div
                      key={logo.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                      whileHover={{ scale: 1.15, y: -2 }}
                      className="aspect-square rounded-lg border border-zinc-800 bg-zinc-800/50 flex items-center justify-center cursor-pointer"
                    >
                      <div className="w-5 h-5 rounded bg-zinc-700" />
                    </motion.div>
                  ))}
                </div> */}
                {/*<motion.button*/}
                {/*  whileHover={{ x: 6 }}*/}
                {/*  className="mt-4 flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"*/}
                {/*>*/}
                {/*  Посмотреть все интеграции <ArrowRight className="w-4 h-4" />*/}
                {/*</motion.button>*/}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
