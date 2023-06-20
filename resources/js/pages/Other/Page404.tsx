import React from 'react';
import {Link} from "react-router-dom";
import illustration from "@assets/images/first-screen.jpg";
import {TextSection} from "@UI/Sections/TextSection.tsx";
import partner_logo_1 from "@assets/partner-logos/logo-1.png";
import partner_logo_2 from "@assets/partner-logos/logo-2.png";
import partner_logo_3 from "@assets/partner-logos/logo-3.png";
import partner_logo_4 from "@assets/partner-logos/logo-4.png";
import {Helmet} from "react-helmet";

export const Page404: React.FC = () => {


    return (
        <div className="w-full flex flex-col text-center text-[#3b4256]">

            <Helmet>
                <title>Victory Park - 404</title>
                <meta name="description" content="Аренда и продажа офисов класса А в Victory Park (ex. Минская Плаза) в Центре Москвы." />
                <meta name='errorpage' content='true' />
                <meta name='errortype' content='404 - Not Found' />
                <link rel="canonical" href={(import.meta as any).env.VITE_APP_URL + '/404'}/>
            </Helmet>

            <section className="relative md:px-[50px] px-5 z-0 text-white flex flex-col pb-32 w-full mb-8">
                <div className="image-overlay w-full h-full pointer-events-none absolute top-0 left-0"/>

                <div className="relative my-12 text-gray-100 text-sm text-left">
                    <Link to="/">Главная</Link><span className="mx-2">/</span>404
                </div>

                <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold font-metapro my-16">Ошибка 404</h1>

                <p className="text-center text-2xl">
                    Такой страницы не существует. <br/>
                    <div className="underline pt-5">
                    <a href="/" >Вернуться на главную</a>
                    </div>
                </p>

                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1]"
                    src={illustration}
                    alt=""
                />
            </section>

        </div>
    );
}