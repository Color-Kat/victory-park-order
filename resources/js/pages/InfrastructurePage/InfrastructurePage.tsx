import React from 'react';
import {Link} from "react-router-dom";

import illustration from "@assets/images/first-screen.jpg";
import {TextSection} from "@UI/Sections/TextSection.tsx";

import partner_logo_1 from "@assets/partner-logos/logo-1.png";
import partner_logo_2 from "@assets/partner-logos/logo-2.png";
import partner_logo_3 from "@assets/partner-logos/logo-3.png";
import partner_logo_4 from "@assets/partner-logos/logo-4.png";

import "./infrastructure.scss";
import {Helmet} from "react-helmet";

export const InfrastructurePage: React.FC = () => {
    return (
        <div className="w-full flex flex-col text-center text-[#3b4256]">

            <Helmet>
                <title>Инфраструктура | Бизнес-центр Victory Park</title>
                <meta name="description" content="Инфраструктура района, в котором расположен бизнес-центр Victory Park хорошо развита, здесь есть, заправки, аптеки, кафе, рестораны, супермаркеты, торговые центры, например, Океания и Времена Года. В самом бизнес-центре также есть необходимые объекты инфраструктуры." />
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
                text="Инфраструктура района, в котором расположен бизнес-центр Victory Park хорошо развита, здесь есть заправки, аптеки, кафе, рестораны, супермаркеты, торговые центры, например, Океания и Времена Года.
                    В самом бизнес-центре также есть необходимые объекты инфраструктуры."
            />

            <TextSection
                title=""
                text="Неподалёку от БЦ расположены обширные жилые массивы как с домами типовой застройки, так и с современными жилыми комплексами, среди которых: ЖК Воробъевы Горы, Эдельвейс, Триумфальный, Кутузовская Ривьера, Дом на Мосфильмовской, Золотые Ключи.
                    Это большое преимущество для тех, кто хочет работать недалеко от дома."
            />

            <TextSection
                title=""
                text="В свободное время есть возможность прогуляться по паркам.
                    В пешей доступности находятся Природный парк Долины реки Сетунь и Поклонная Гора.
                    На личном транспорте можно быстро добраться до Парка Фили и Воробьевых гор."
            />

            <section className="md:px-8 px-5 text-base mb-16">
                <h2
                    className="sm:mt-12 mt-8 text-app-accent font-bold lg:text-5xl md:text-4xl text-3xl font-metapro max-w-2xl mx-auto"
                >
                    Арендаторы бизнес-центра
                    Victory Park
                </h2>

                <div className="partner-logos flex items-center sm:my-16 my-8 gap-3 justify-between flex-wrap max-w-5xl mx-auto">
                    <img src={partner_logo_1} alt="new cinema lab"/>
                    <img src={partner_logo_2} alt="ОГК Групп"/>
                    <img src={partner_logo_3} alt="ЕНСК"/>
                    <img src={partner_logo_4} alt="Краограф"/>
                </div>
            </section>

        </div>
    );
}