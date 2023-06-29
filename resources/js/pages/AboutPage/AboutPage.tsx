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
                    Каланчёвская Плаза – современный бизнес-центр в самом сердце Москвы, предлагающий уникальные преимущества для успешных компаний и предпринимателей. Расположенный на Каланчёвской площади, этот высокотехнологичный комплекс обеспечивает комфортные условия работы, инновационную инфраструктуру и привлекательные возможности для развития бизнеса.
                </p>

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]"
                    src={illustration}
                    alt=""
                />
            </section>

            <TextSection
                title="Близость к метро и Садовому кольцу"
                text="Одним из главных преимуществ Каланчёвской Плазы является её стратегическое месторасположение. Бизнес-центр находится в непосредственной близости от центра Москвы и важных деловых районов, что обеспечивает удобство доступа как для сотрудников, так и для клиентов. Близость к основным транспортным магистралям и станциям метро делает Каланчёвскую Плазу легкодоступной и удобной для всех."
            />

            <TextSection
                title="Современность"
                text='Бизнес-центр предлагает просторные и современные офисные помещения, оборудованные по последнему слову техники. Высококачественная отделка, эргономичное обустройство и использование передовых технологий создают оптимальную рабочую среду для повышения эффективности и производительности сотрудников.'
            />

            <TextSection
                title="Безопасность"
                text='Охрана и безопасность – ещё одно важное преимущество Каланчёвской Плазы. Бизнес-центр оборудован современными системами безопасности, включая видеонаблюдение, контроль доступа и систему пожарной безопасности, что обеспечивает защиту и безопасность как для сотрудников, так и для имущества компаний.'
            />

            <div className="specifications-polygon flex flex-wrap sm:justify-center px-5 lg:space-x-8 max-w-6xl mx-auto my-8">
                <article className="flex items-center">
                    <p>Общая площадь бизнес-центра:<br/><span>19 671 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Арендуемая площадь:<br/><span>16 386 м<sup>2</sup></span></p>
                </article>
                <article className="flex items-center">
                    <p>Количество этажей:<br/><span>4</span></p>
                </article>
                <article className="flex items-center md:pr-16 sm:pr-20">
                    <p>Год постройки:<br/><span>2011</span></p>
                </article>
                <article className="flex items-center md:pr-24 sm:pr-20">
                    <p>Паркинг:<br/><span>86 мест</span></p>
                </article>
            </div>

            <TextSection
                title="Инфраструктура"
                text="Особое внимание уделяется разнообразным бизнес-услугам, доступным внутри бизнес-центра. Каланчёвская Плаза предлагает полный спектр удобств, включая современные конференц-залы, просторные лобби с комфортной зоной ожидания, рестораны и кофейни, а также фитнес-центр и парковку. Все это позволяет проводить встречи, конференции, деловые ланчи и другие мероприятия без необходимости покидать бизнес-центр."
            />
        </div>
    );
}