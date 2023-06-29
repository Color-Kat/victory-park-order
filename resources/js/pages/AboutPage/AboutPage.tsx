import React from 'react';
import {Link} from "react-router-dom";

import "./aboutPage.scss";
import illustration from "@assets/images/about-bg.jpg";
import {TextSection} from "@UI/Sections/TextSection.tsx";
import {Helmet} from "react-helmet";

export const AboutPage: React.FC = () => {
    return (
        <div className="w-full flex flex-col text-center text-[#3b4256]">

            <Helmet>
                <title>Описание бизнес-центра Монарх. Инфраструктура, характеристики {(import.meta as any).env.VITE_BC_NAME}</title>
                <meta name="description" content="Информация о бизнес-центре Монарх." />
                <link rel="canonical" href={(import.meta as any).env.VITE_APP_URL + '/about'}/>
            </Helmet>

            <section className="relative md:px-[50px] px-5 z-0 text-white flex flex-col pb-32">
                <div className="image-overlay w-full h-full pointer-events-none absolute top-0 left-0"/>

                <div className="relative my-12 text-gray-100 text-sm text-left">
                    <Link to="/">Главная</Link><span className="mx-2">/</span>О бизнес-центре
                </div>

                <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold font-metapro my-16">
                    О бизнес-центре {(import.meta as any).env.VITE_BC_NAME}
                </h1>

                <p className="max-w-5xl mx-auto bg-black/20 backdrop-blur-md rounded-lg p-3">
                    Бизнес-центр входит в состав многофункционального делового спортивно-рекреационного комплекса «МонАрх-Центр» общей площадью 167 900 кв. м. Здесь находятся торговый центр «Монарх Плаза», отель премиум-класса «Renaissance Moscow Monarch Centre» на 366 пятизвездочных номеров, фитнес-центр, муниципальный детский спортивно-оздоровительный клуб. В комплексе действует двухуровневая подземная парковка, а также паркинг на эксплуатируемой кровле одного из зданий бизнес-центра.
                </p>

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]"
                    src={illustration}
                    alt=""
                />
            </section>

            <TextSection
                title="Близость к метро и ТТК"
                text="Сочетая уникальное расположение и превосходные транспортные связи, Монарх обеспечивает легкую и комфортную доступность. Стратегически размещенный в центре города, бизнес-центр легко доступен из любой точки Москвы благодаря близости к множеству общественного транспорта, включая станцию метро и остановки автобусов. Кроме того, для автовладельцев имеются удобные парковочные места."
            />

            <TextSection
                title="Техническое оснащение"
                text="Оснащение 14 лифтами и центральной системой кондиционирования обеспечивает удобство перемещения и комфортное рабочее окружение. Современная коммуникация, высокоскоростной интернет, инновационная безопасность и автоматизация создают идеальные условия для эффективной работы."
            />

            <TextSection
                title="Альтернатива Сити"
                text="Инженерные и телекоммуникационные системы здания соответствуют передовым мировым стандартам. Еще одним плюсом БЦ является прямой транспортный доступ к аэропорту «Шереметьево». Таким образом, бизнес-центр «Монарх» может по праву считаться одной из лучших альтернатив МФК «Москва-Сити»."
            />

            <div className="specifications-polygon flex flex-wrap sm:justify-center px-5 lg:space-x-8 max-w-6xl mx-auto my-8">
                <article className="flex items-center">
                    <p>Общая площадь бизнес-центра:<br/><span>167 900 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Арендуемая площадь:<br/><span>76 050  м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Количество этажей:<br/><span>38</span></p>
                </article>
                <article className="flex items-center md:pr-16 sm:pr-20">
                    <p>Год постройки:<br/><span>2008</span></p>
                </article>
                <article className="flex items-center md:pr-24 sm:pr-20">
                    <p>Паркинг:<br/><span>940 мест</span></p>
                </article>
            </div>

            <TextSection
                title="Инфраструктура"
                text="Бизнес-центр Монарх в Москве предлагает обширную инфраструктуру: рестораны, кафе для деловых встреч, фитнес-центр для поддержания формы, конференц-залы для важных событий. Здесь также расположены банки и магазины. Все это создает комфортное и продуктивное рабочее окружение, экономя ваше время."
            />
        </div>
    );
}