import React from 'react';
import Layout from '@theme/Layout';
import { Navbar } from '@site/src/components/new-www/ui/navbar';
import { FooterSection } from '@site/src/components/new-www/sections/footer-section';
import { Mail, MessageCircle, Github } from 'lucide-react';
import Link from '@docusaurus/Link';

export default function Contact() {
  return (
    <Layout
      title="Контакты"
      description="Свяжитесь с командой Gml Launcher"
      noFooter={true}>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />
        <div className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">Контакты</h1>
            <p className="text-xl text-zinc-400 mb-12">
              Есть вопросы? Мы всегда на связи и готовы помочь
            </p>




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
