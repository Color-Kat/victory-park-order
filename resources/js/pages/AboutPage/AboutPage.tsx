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
                    Бизнес-центр Riverside Towers – один из самых узнаваемых деловых комплексов Москвы. Построенный в начале 2000-х годов, он является одним из самых качественных объектов. Качество подтверждается пулом известных международных компаний, которые располагаются в Riverside Towers.
                </p>

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]"
                    src={illustration}
                    alt=""
                />
            </section>

            <TextSection
                title="Близость к метро и Садовому кольцу"
                text='Одним из главных преимуществ "Риверсайд Тауэрс" является его стратегическое расположение. Он расположен на берегу Москвы-реки вблизи центра города, что обеспечивает удобный доступ к основным деловым районам и транспортным магистралям. Близость к метро и основным транспортным узлам делает его легко доступным для сотрудников и клиентов.'
            />

            <TextSection
                title="Комплекс Красные Холмы"
                text='Riverside Towers является частью культурно-делового комплекса Красные холмы состоящего из 13 строений общей площадью около 80000 кв.м, из которых 60000 кв.м составляют офисные площади класса A, а также пятизвездочная гостиница SwissHotel, а также Московский Международный Дом Музыки - один из самых известных культурных центров столицы.'
            />

            <TextSection
                title="Безопасность"
                text='В комплексе имеется круглосуточная охрана и контроль доступа, что обеспечивает безопасность и конфиденциальность бизнес-процессов.'
            />

            <div className="specifications-polygon flex flex-wrap sm:justify-center px-5 lg:space-x-8 max-w-6xl mx-auto my-8">
                <article className="flex items-center">
                    <p>Общая площадь бизнес-центра:<br/><span>18 025 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Арендуемая площадь:<br/><span>14 559 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Количество этажей:<br/><span>17</span></p>
                </article>
                <article className="flex items-center md:pr-16 sm:pr-20">
                    <p>Год постройки:<br/><span>1998</span></p>
                </article>
                <article className="flex items-center md:pr-24 sm:pr-20">
                    <p>Паркинг:<br/><span>70 мест</span></p>
                </article>
            </div>

            <TextSection
                title="Инфраструктура"
                text="Риверсайд Тауэрс обеспечивает широкий спектр удобств для комфортной работы. Комплекс включает в себя рестораны, кофейни и кафе, где сотрудники могут отдохнуть и провести деловые встречи. Также доступны банкоматы, аптеки и медицинские услуги, обеспечивая удобство и безопасность сотрудников."
            />
        </div>
    );
}