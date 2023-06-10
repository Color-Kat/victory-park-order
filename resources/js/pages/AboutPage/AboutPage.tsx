import React from 'react';
import {Link} from "react-router-dom";

import "./aboutPage.scss";
import illustration from "@assets/images/first-screen.jpg";
import {TextSection} from "@UI/Sections/TextSection.tsx";

export const AboutPage: React.FC = () => {
    return (
        <div className="w-full flex flex-col text-center text-[#3b4256]">

            <section className="relative md:px-[50px] px-5 z-0 text-white flex flex-col pb-32">
                <div className="image-overlay w-full h-full pointer-events-none absolute top-0 left-0"/>

                <div className="relative my-12 text-gray-100 text-sm text-left">
                    <Link to="/">Главная</Link><span className="mx-2">/</span>О бизнес-центре
                </div>

                <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold font-metapro my-16">О бизнес-центре Victory
                    Park</h1>

                <p className="max-w-5xl mx-auto">
                    Бизнес-центр Victory Park Plaza был построен в 2014 году рядом с Минской улицей в
                    Москве.
                    В то время он был известен под названием Минская Плаза, затем было выбрано название
                    Victory Park.
                    В БЦ Victory Park от 5 до 7 этажей.
                    Внешняя и внутренняя отделка выполнены с использованием качественных современных
                    материалов.
                    Здание соответствует классу.
                    Территория огорожена забором, въезд осуществляется через КПП, рядом со зданием
                    бизнес-центра есть вместительная наземная парковка.
                </p>

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]"
                    src={illustration}
                    alt=""
                />
            </section>

            <TextSection
                title="Близость от метро"
                text="Бизнес-центр расположен в шаговой доступности от станции метро «Минская».
                        Расстояние до ТТК –3,5 км, МКАД –8,5 км.
                        Основные магистрали –Кутузовский проспект, Рублевское шоссе, Аминьевское шоссе,
                        Мичуринский проспект, Ленинский проспект.
                        От Киевского вокзала возможно добраться до международных аэропортов «Шереметьево» и
                        «Внуково»"
            />

            <TextSection
                title="Природа"
                text="Бизнес-центр расположен в зеленой зоне долины реки Сетунь и одноименного природного
                        заказника.
                        Из окон бизнес-центра можно любоваться красотой окружающей природы.
                        Соседство с Поклонной горы, Триумфальной аркой, а так же, лесополосой вдоль р. Сетунь,
                        позволит ощутить неповторимую атмосферу данных мест."
            />

            <TextSection
                title="Техническое оснащение"
                text="Приточно-вытяжная система вентиляции
                        Современные системы кондиционирования помещений
                        Современные противопожарные системы
                        Лифты –3 лифтовых группы (9 панорамных лифтов)
                        Телекоммуникации–Интернет / Телефония"
            />

            <div className="specifications-polygon flex flex-wrap justify-center space-x-8 max-w-5xl mx-auto my-8">
                <article className="flex items-center">
                    <p>Общая площадь бизнес-центра:<br/><span>35 045 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Арендуемая площадь:<br/><span>26 417  м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Количество этажей:<br/><span>7</span></p>
                </article>
                <article className="flex items-center lg:pr-24">
                    <p>Год постройки:<br/><span>2014</span></p>
                </article>
                <article className="flex items-center lg:pr-16">
                    <p>Сетка колонн:<br/><span>6х9 м</span></p>
                </article>
            </div>

            <TextSection
                title="Инфраструктура"
                text="Инфраструктура в бизнес-центре «Аэродом» включает в себя кафе для арендаторов, банкоматы
                        и магазины. Хорошевский район, в котором располагается «Аэродом» также характеризуется
                        отлично развитой инфраструктурой со множеством заведений общественного питания,
                        торгово-развлекательных комплексов, отделений банков, магазинов, аптек, образовательных
                        учреждений, мест культурного отдыха."
            />
        </div>
    );
}