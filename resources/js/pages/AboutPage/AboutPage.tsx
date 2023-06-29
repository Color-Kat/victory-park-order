import React from 'react';
import {Link} from "react-router-dom";

import "./aboutPage.scss";
import illustration from "@assets/images/about-bg.jpg";
import {TextSection} from "@UI/Sections/TextSection.tsx";
import {Helmet} from "react-helmet";

export const AboutPage: React.FC = () => {
    const BC_name = (import.meta as any).env.VITE_BC_NAME;

    return (
        <div className="w-full flex flex-col text-center text-[#3b4256]">

            <Helmet>
                <title>Описание бизнес-центра {BC_name}. Инфраструктура, характеристики {BC_name}</title>
                <meta name="description" content={`Информация о бизнес-центре ${BC_name}.`} />
                <link rel="canonical" href={(import.meta as any).env.VITE_APP_URL + '/about'}/>
            </Helmet>

            <section className="relative md:px-[50px] px-5 z-0 text-white flex flex-col pb-32">
                <div className="image-overlay w-full h-full pointer-events-none absolute top-0 left-0"/>

                <div className="relative my-12 text-gray-100 text-sm text-left">
                    <Link to="/">Главная</Link><span className="mx-2">/</span>О бизнес-центре
                </div>

                <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold font-metapro text-white z-10 my-16">
                    О бизнес-центре {BC_name}
                </h1>

                <p className="max-w-5xl mx-auto bg-black/20 backdrop-blur-md rounded-lg p-3">
                    Бизнес-парк "Золотое кольцо", расположенный на Южнопортовой улице, д.5 в Москве, представляет собой современный коммерческий комплекс, который предлагает удобные условия для успешного ведения бизнеса. Построенный в 2011 году, бизнес-парк "Золотое кольцо" представляет собой современное здание высокого качества с классом В+. Общая площадь комплекса составляет 46000 квадратных метров, предлагая достаточно пространства для различных видов деятельности. Благодаря своей архитектуре и функциональности, он идеально подходит для офисных и коммерческих целей.
                </p>

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]"
                    src={illustration}
                    alt=""
                />
            </section>

            <TextSection
                title="Близость к метро и ТТК"
                text='Расположенный рядом с метро "Кожуховская", данный бизнес-парк обеспечивает отличную транспортную доступность и удобство для сотрудников и клиентов.'
            />

            <TextSection
                title="Парковка"
                text='Одним из главных преимуществ бизнес-парка "Золотое кольцо" является наличие просторной парковки на 1500 машиномест. Это обеспечивает удобство для сотрудников и посетителей. Большая парковка позволяет избежать неудобств и сосредоточиться на работе.'
            />

            <TextSection
                title="Техническое оснащение"
                text='Бизнес-парк "Золотое кольцо" включает в себя современные технологии и системы, созданные для обеспечения комфорта, безопасности и эффективности работы. Благодаря приточно-вытяжной вентиляции, вентилируемому фасаду, системе центрального кондиционирования, широкополосному интернету, системе видеонаблюдения и пропускной системе, бизнес-парк "Золотое кольцо" предоставляет идеальные условия для успешного ведения бизнеса.'
            />

            <div className="specifications-polygon flex flex-wrap sm:justify-center px-5 lg:space-x-8 max-w-6xl mx-auto my-8">
                <article className="flex items-center">
                    <p>Общая площадь бизнес-центра:<br/><span>46 000 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Арендуемая площадь:<br/><span>40 197 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Количество этажей:<br/><span>4</span></p>
                </article>
                <article className="flex items-center md:pr-16 sm:pr-20">
                    <p>Год постройки:<br/><span>2011</span></p>
                </article>
                <article className="flex items-center md:pr-24 sm:pr-20">
                    <p>Паркинг:<br/><span>1500 мест</span></p>
                </article>
            </div>

            <TextSection
                title="Инфраструктура"
                text='Бизнес-парк "Золотое кольцо" на Южнопортовой улице, дом 5 в Москве, предлагает широкий спектр инфраструктуры, создавая комфортные условия для работы и отдыха сотрудников и посетителей.'
            />
        </div>
    );
}