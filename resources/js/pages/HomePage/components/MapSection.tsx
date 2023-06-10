import React from 'react';
import {RedButton} from "@UI/Buttons";
import firstScreenImg from "@assets/images/first-screen.jpg";


export const MapSection: React.FC = ({}) => {


    return (
        <div
            className="relative section h-full w-full"
            data-anchor="page-6"
        >
            <div className=" flex items-center justify-between flex-col w-full h-screen">
                <h2 className="font-metapro lg:text-6xl md:text-6xl xs:text-5xl text-3xl font-bold text-app-accent text-center lg:my-12 my-6">
                    Контактная информация
                </h2>

                <div className="map w-full flex flex-1 bg-red-300">
                    карта
                </div>

                <div
                    className="absolute w-full px-5 flex items-stretch md:justify-evenly justify-between sm:bottom-10 bottom-5 sm:flex-row flex-col">

                    <article
                        className="bg-gray-700 text-center xl:px-14 px-3 sm:py-5 py-2 sm:rounded md:w-1/4 flex flex-col items-center justify-center">
                        <h6 className="font-bold uppercase text-gray-400 mb-2 md:text-base text-sm">Адрес: </h6>
                        <p className="md:text-sm text-xs text-gray-100">
                            г. Москва Минская улица, 2Ж
                        </p>
                    </article>

                    <article
                        className="bg-gray-700 text-center xl:px-14 px-3 sm:py-5 py-2 sm:rounded md:w-1/4 flex flex-col items-center justify-center">
                        <h6 className="font-bold uppercase text-gray-400 mb-2 md:text-base text-sm">Телефон: </h6>
                        <a className="md:text-sm text-xs text-gray-100 underline" href="tel:+7 (495) 21-21-799">
                            +7 (495) 21-21-799
                        </a>
                    </article>

                    <article
                        className="bg-gray-700 text-center xl:px-14 px-3 sm:py-5 py-2 sm:rounded md:w-1/4 flex flex-col items-center justify-center">
                        <h6 className="font-bold uppercase text-gray-400 mb-2 md:text-base text-sm">E-mail: </h6>
                        <a className="md:text-sm text-xs text-gray-100 underline" href="mailto:info@minskayaplaza.ru">
                            info@minskayaplaza.ru
                        </a>
                    </article>

                </div>
            </div>
        </div>
    );
}