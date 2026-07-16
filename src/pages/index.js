import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Navbar} from '@site/src/components/new-www/ui/navbar';
import {HeroSection} from '@site/src/components/new-www/sections/hero-section';
import {ImpactSection} from '@site/src/components/new-www/sections/impact-section';
import {FeaturesSection} from '@site/src/components/new-www/sections/features-section';
// import {TestimonialsSection} from '@site/src/components/new-www/sections/testimonials-section';
import {PricingSection} from '@site/src/components/new-www/sections/pricing-section';
import {CtaSection} from '@site/src/components/new-www/sections/cta-section';
import {FooterSection} from '@site/src/components/new-www/sections/footer-section';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    useEffect(() => {
        if (!window.amo_social_button_loaded) {
            window.amo_social_button_loaded = true;

            // Конфигурация темы чата
            window.amoSocialButtonConfig = {
                onlinechat: {
                    theme: {
                        background: 'black', // фон
                        system_color: 'pink', // цвет системных текстов (статус доставки, дата)
                        header: { // можно указать header: false, тогда он вообще не будет отрисован
                            background: 'black', // цвет фона верхней части чата
                            color: 'black', // цвет текста верхней части
                        },
                        message: {
                            outgoing_background: 'red', // фон сообщения пользователя
                            outgoing_color: 'white', // цвет текста сообщения пользователя
                            incoming_background: 'white', // фон ответа оператора
                            incoming_color: 'black', // цвет текста ответа оператора
                        },
                        compose: {
                            height: 100, // минимальная высота в пикселях (максимальная 170px, изменить ее нельзя)
                            button_background: 'black', // фон кнопки отправки
                        }
                    },
                },
            };

            const scriptContent = `
       (function(a,m,o,c,r,m){a[m]={id:"440321",hash:"3a18918052d25f61f02d14bb3fab5e4b3330b96725820c02cca82b9866ec2a8f",locale:"ru",inline:true,setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};a[o+'Config']=a[o+'Config']||{};a[o+'Config'].hidden=!0;var d=a.document,s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.amocrm.ru/js/button.js';d.head&&d.head.appendChild(s)}(window,0,'amoSocialButton',0,0,'amo_social_button'));
      `;

            const script = document.createElement('script');
            script.innerHTML = scriptContent;
            document.head.appendChild(script);
        }
    }, []);

    return (
        <Layout
            title={siteConfig.title}
            description="Gml Лаунчер"
            noFooter={true}>
            <main className="min-h-screen bg-zinc-950">
                <Navbar/>
                <HeroSection/>
                <ImpactSection/>
                <FeaturesSection/>
                {/* <TestimonialsSection/> */}
                <PricingSection/>
                <CtaSection/>
                <FooterSection/>
            </main>

            <style jsx global>{`
                .navbar {
                    display: none !important;
                }

                .amo-button--only-livechat {
                    position: fixed !important;
                    right: 30px !important;
                    bottom: 30px !important;
                    display: flex !important;
                }

            `}</style>
        </Layout>
    );
}
