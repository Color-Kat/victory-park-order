import React from 'react';
import {Link} from "react-router-dom";

import illustration from "@assets/images/first-screen.jpg";
import {TextSection} from "@UI/Sections/TextSection.tsx";

import partner_logo_1 from "@assets/partner-logos/1.jpg";
import partner_logo_2 from "@assets/partner-logos/2.jpg";
import partner_logo_3 from "@assets/partner-logos/3.jpg";
import partner_logo_4 from "@assets/partner-logos/4.jpg";

import "./infrastructure.scss";
import {Helmet} from "react-helmet";

export const InfrastructurePage: React.FC = () => {
    return (
        <div className="w-full flex flex-col text-center text-[#3b4256]">

            <Helmet>
                <title>Инфраструктура | Бизнес-центр {(import.meta as any).env.VITE_BC_NAME}</title>
                <meta name="description" content={`В бизнес-центре Монарх развитая инфраструктура. Торговый центр «Монарх Плаза» площадью 11 000 кв. м предлагает разнообразные бутики и магазины.`} />
                <link rel="canonical" href={(import.meta as any).env.VITE_APP_URL + '/infrastructure'}/>
            </Helmet>

            <section className="relative md:px-[50px] px-5 z-0 text-white flex flex-col pb-32 w-full mb-8">
                <div className="image-overlay w-full h-full pointer-events-none absolute top-0 left-0"/>

                <div className="relative my-12 text-gray-100 text-sm text-left">
                    <Link to="/">Главная</Link><span className="mx-2">/</span>Инфраструктура
                </div>

                <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold font-metapro my-16">Инфраструктура</h1>

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]"
                    src={illustration}
                    alt=""
                />
            </section>

            <TextSection
                title=""
                text="К услугам арендаторов представлена широко развитая инфраструктура многофункционального делового комплекса «МонАрх-Центр». Торговый центр «Монарх Плаза» площадью 11 000 кв. м предлагает разнообразные бутики и магазины (ювелирные универмаги «Golden Plaza» и «Золотая симфония», салон бытовой техники «Mielle», книжный салон «Буква», салон связи «Связной», салон оптики «EYEKRAFT», магазин подарков «Мир промыслов», зоомагазин «Бетховен»), сервисные услуги (химчистка «Лора», банкомат банка Райффайзен, денежные переводы «Western Union»), рестораны и кафе («Вкус Хлеба»), супермаркет «Перекресток», а также офисы турфирм, салон красоты и детский спортивно-оздоровительный комплекс."
            />
            <TextSection
                title=""
                text=" С сентября 2011 в «Монарх Плаза» свои двери распахнет знаменитая школа танцев «Galla Dance». В здании бизнес-центра находится фитнес-центр «ИКС-ФИТ» с бассейном, джакузи и залом для аэробики, тренажерным залом, где помимо всего прочего оборудованы площадки для игры в волейбол, баскетбол и теннис."
            />

            <TextSection
                title=""
                text="В числе якорных арендаторов БЦ «Монарх» пребывают ОАО «Государственная Транспортная Лизинговая Компания» и страховое общество «Регион Союз». В ближайшем окружении МФК «Монарх» расположены стадион «Юных Пионеров», Центральный московский ипподром, Петровский парк, стадион «Динамо», Дворец ледового спорта «Мегаспорт». Поблизости от МФК «МонАрх-Центр» находится дистанционный терминал аэропорта Шереметьево, где можно зарегистрироваться на рейс и отправиться в аэропорт на посадку."
            />

            {/*<TextSection*/}
            {/*    title=""*/}
            {/*    text="В свободное время есть возможность прогуляться по паркам.*/}
            {/*        В пешей доступности находятся Природный парк Долины реки Сетунь и Поклонная Гора.*/}
            {/*        На личном транспорте можно быстро добраться до Парка Фили и Воробьевых гор."*/}
            {/*/>*/}

            <section className="md:px-8 px-5 text-base mb-16">
                <h2
                    className="sm:mt-12 mt-8 text-app-accent font-bold lg:text-5xl md:text-4xl text-3xl font-metapro max-w-2xl mx-auto"
                >
                    Арендаторы бизнес-центра {(import.meta as any).env.VITE_BC_NAME}
                </h2>

                <div className="partner-logos flex items-center sm:my-16 my-8 gap-3 justify-between flex-wrap max-w-5xl mx-auto">
                    <img src={partner_logo_1} alt="Mr. Doors"/>
                    <img src={partner_logo_2} alt="Miele"/>
                    <img src={partner_logo_3} alt="СТС media"/>
                    <img src={partner_logo_4} alt="Kotanyi"/>
                </div>
            </section>

        </div>
    );
}