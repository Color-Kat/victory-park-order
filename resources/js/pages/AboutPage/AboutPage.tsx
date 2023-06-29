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
                <title>Описание бизнес-центра Особняк {BC_name}. Инфраструктура, характеристики {BC_name}</title>
                <meta name="description" content={`Информация о бизнес-центре Особняк ${BC_name}.`} />
                <link rel="canonical" href={(import.meta as any).env.VITE_APP_URL + '/about'}/>
            </Helmet>

            <section className="relative md:px-[50px] px-5 z-0 text-white flex flex-col pb-32">
                <div className="image-overlay w-full h-full pointer-events-none absolute top-0 left-0"/>

                <div className="relative my-12 text-gray-100 text-sm text-left">
                    <Link to="/">Главная</Link><span className="mx-2">/</span>О бизнес-центре
                </div>

                <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold font-metapro text-white z-10 my-16">
                    {/*О бизнес-центре {BC_name}*/}
                    Об особняке «Усадьба Якова Брюса»
                </h1>

                <p className="max-w-5xl mx-auto bg-black/20 backdrop-blur-md rounded-lg p-3">
                    Особняк «Усадьба Я. Брюса» реконструирован в 2011 году, общая площадь здания составляет 2856 м2. Он выполнен в классическом стиле в сочетании со стилем Hi-Tech (верхние этажи особняка). Особняк имеет прилегающую территорию с возможностью освоения придомовой территории (летнее кафе и т.д.), а также организации паркинга на 25-30 машиномест.
                </p>

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]"
                    src={illustration}
                    alt=""
                />
            </section>

            <TextSection
                title="Близость к центру Москвы"
                text='Офисный особняк «Усадьба Я. Брюса» расположен в историческом центре Москвы - престижной части города с удобными транспортными сообщениями и богатой инфраструктурой. Особняк расположен на пересечении таких улиц, как Большая Никитская и Брюсов переулок'
            />

            <TextSection
                title="Богатая история"
                text='Здание усадьба Я. В. Брюса является носителем богатой истории, которая восходит к XVII веку. Этот удивительный дом пережил великий московский пожар в 1812 году, затем, после многократных попыток перестройки, был восстановлен и обрел свой облик, близкий к нынешнему – это произошло в XVIII веке.'
            />

            <TextSection
                title="Транспортная доступность"
                text='Усадьба Я. Брюса расположена в Пресненском районе, на западе Центрального административного округа Москвы. Основными магистралями являются улицы Красная Пресня, 1905 года, Звенигородское шоссе, Краснопресненская набережная, Мантулинская, Большая и Малая Никитские, Малая Бронная. По территории района пролегают Садовое кольцо (улицы Большая Садовая, Садовая-Кудринская) и Третье транспортное кольцо.'
            />

            <div className="specifications-polygon flex flex-wrap sm:justify-center px-5 lg:space-x-8 max-w-6xl mx-auto my-8">
                <article className="flex items-center">
                    <p>Общая площадь бизнес-центра:<br/><span>3 236 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Арендуемая площадь:<br/><span>2 856 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Количество этажей:<br/><span>6</span></p>
                </article>
                <article className="flex items-center md:pr-16 sm:pr-20">
                    <p>Год постройки:<br/><span>2011 (реконструкция)</span></p>
                </article>
                <article className="flex items-center md:pr-24 sm:pr-20">
                    <p>Паркинг:<br/><span>30 мест</span></p>
                </article>
            </div>

            <TextSection
                title="Инфраструктура"
                text='Расположенный в центре города бизнес-центр Брюсов окружен огромным количеством ресторанов и кафе. В шаговой доступности множество магазинов, банков, салонов красоты, аптек.'
            />
        </div>
    );
}