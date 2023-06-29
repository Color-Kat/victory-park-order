import React from 'react';
import {Link} from "react-router-dom";

import illustration from "@assets/images/first-screen.jpg";
import {TextSection} from "@UI/Sections/TextSection.tsx";

const partner_logo_1 = "/storage/partner-logos/1.jpg";
const partner_logo_2 = "/storage/partner-logos/2.jpg";
const partner_logo_3 = "/storage/partner-logos/3.jpg";
const partner_logo_4 = "/storage/partner-logos/4.jpg";

import "./infrastructure.scss";
import {Helmet} from "react-helmet";

export const InfrastructurePage: React.FC = () => {
    return (
        <div className="w-full flex flex-col text-center text-[#3b4256]">

            <Helmet>
                <title>Инфраструктура | Бизнес-центр {(import.meta as any).env.VITE_BC_NAME}</title>
                <meta name="description" content={`Для обеспечения комфорта и удобства сотрудников и посетителей в бизнес-центре имеются различные рестораны, кофейни и кафе, фитнес-центр.`} />
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

            {/*<section className="md:px-8 px-5">*/}
            {/*    <p className="max-w-3xl mx-auto sm:my-12 my-8">*/}
            {/*        */}
            {/*    </p>*/}
            {/*</section>*/}

            <TextSection
                title=""
                text="Бизнес-центр также предлагает широкий выбор дополнительных удобств. В его состав входят современные конференц-залы и переговорные комнаты, оборудованные передовой аудио- и видеотехникой, что делает их идеальным местом для проведения встреч, презентаций и переговоров. Кроме того, Каланчёвская Плаза предлагает комфортные лобби с пространством для ожидания, где посетители и клиенты могут провести время в приятной атмосфере."
            />

            <TextSection
                title=""
                text="Для обеспечения комфорта и удобства сотрудников и посетителей в бизнес-центре имеются различные рестораны, кофейни и кафе, предлагающие разнообразное меню и возможность проведения деловых обедов или неформальных встреч. Фитнес-центр, расположенный внутри Каланчёвской Плазы, дает возможность заняться спортом и поддерживать здоровый образ жизни без необходимости покидать бизнес-центр."
            />

            <section className="md:px-8 px-5 text-base mb-16">
                <h2
                    className="sm:mt-12 mt-8 text-app-accent font-bold lg:text-5xl md:text-4xl text-3xl font-metapro max-w-2xl mx-auto"
                >
                    Арендаторы бизнес-центра {(import.meta as any).env.VITE_BC_NAME}
                </h2>

                <div className="partner-logos flex items-center sm:my-16 my-8 gap-3 justify-between flex-wrap max-w-5xl mx-auto sm:flex-row flex-col">
                    <img src={partner_logo_1} alt="Mr. Doors"/>
                    <img src={partner_logo_2} alt="Miele"/>
                    <img src={partner_logo_3} alt="СТС media"/>
                    <img src={partner_logo_4} alt="Kotanyi"/>
                </div>
            </section>

        </div>
    );
}