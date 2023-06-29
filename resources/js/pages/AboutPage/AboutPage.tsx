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
                    {/*О бизнес-центре {BC_name}*/}
                    О бизнес-центре Lotte Plaza
                </h1>

                <p className="max-w-5xl mx-auto bg-black/20 backdrop-blur-md rounded-lg p-3">
                    "Лотте Плаза (Lotte Plaza) – многофункциональный комплекс, состоящий из бизнес-центра класса премиум, торгового комплекса и пятизвёздочного отеля.
                    Бизнес-центр функционирует с августа 2007 года. Расположен он на пересечении Новинского бульвара и Нового Арбата в центре Москвы. Позже – в 2010 году Лотте Плаза был открыт Лотте Отель. Здания комплекса гармонично встроены в концепцию Нового Арбата. В здании БЦ 21 этаж и панорамное остекление, благодаря этому внешне он выглядит величественно и современно, а с верхних этажей открывается отличный вид на Москву."
                </p>

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]"
                    src={illustration}
                    alt=""
                />
            </section>

            <TextSection
                title="Близость к метро и Садовому кольцу"
                text="Выгодным отличием бизнес-центра Лотте среди других является его удобное месторасположение в исторической черте города, на пересечении Садового кольца и улицы Новый Арбат."
            />

            <TextSection
                title="Престижность"
                text='Удобные подъездные пути не единственное преимущество бизнес-центра. Здесь также сосредоточены представители бизнес-элиты. Среди арендаторов офисов в Лотте Плаза крупнейшие нефтетрейдеры – BP и Crudex, интернет-компания Google, международное агентство элитной недвижимости Chesterton, консалтинговая компания Bain.'
            />

            <TextSection
                title="Торговый центр"
                text='Главными преимуществами для арендаторов являются развитая внешняя и внутренняя инфраструктура, подземная парковка, а также прекрасная транспортная доступность. Недалеко Бульварное кольцо, Кутузовский проспект и ТТК.'
            />

            <div className="specifications-polygon flex flex-wrap sm:justify-center px-5 lg:space-x-8 max-w-6xl mx-auto my-8">
                <article className="flex items-center">
                    <p>Общая площадь бизнес-центра:<br/><span>132 500 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Арендуемая площадь:<br/><span>78 643 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Количество этажей:<br/><span>21</span></p>
                </article>
                <article className="flex items-center md:pr-16 sm:pr-20">
                    <p>Год постройки:<br/><span>2007</span></p>
                </article>
                <article className="flex items-center md:pr-24 sm:pr-20">
                    <p>Паркинг:<br/><span>261 место</span></p>
                </article>
            </div>

            <TextSection
                title="Инфраструктура"
                text="Бизнес-центр Лотте Плаза предлагает широкий спектр услуг и удобств, включая рестораны, кафе, банковские услуги, фитнес-центр и спа-салон. Все это позволяет бизнесменам обеспечить комфортные условия для работы и отдыха, минимизируя необходимость в поездках за пределы комплекса."
            />
        </div>
    );
}