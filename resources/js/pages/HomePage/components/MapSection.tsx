import React, {useState} from 'react';

import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';

import {RedButton} from "@UI/Buttons";
import firstScreenImg from "@assets/images/first-screen.jpg";


export const MapSection: React.FC = ({}) => {
    return (
        <div
            className="relative section h-full w-full"
            data-anchor="page-6"
            id="page-6-anchor"
        >
            <div className="flex items-center justify-between flex-col w-full h-screen">
                <div className="lg:my-12 my-6">
                    <h2 className="font-metapro lg:text-6xl md:text-6xl xs:text-5xl text-3xl font-bold text-app-accent text-center">
                        Контактная информация
                    </h2>
                </div>

                <div className="map w-full flex flex-1">
                    <YMaps query={{
                        // @ts-ignore
                        apikey: import.meta.env.VITE_YANDEX_MAP_API_KEY,
                        lang: 'ru_RU'
                    }}>
                        <Map
                            defaultState={{
                                center: [55.724140, 37.504663],
                                zoom: 17,
                                behaviors: ["disable('scrollZoom')"]
                            }}
                            className="w-full h-full"
                        >
                            <Placemark
                                geometry={[55.724140, 37.504663]}
                                options={{
                                    iconColor: '#f82f38',
                                }}

                                properties={{
                                    hintContent: '<b> Я появляюсь при наведении на метку </b>',
                                    // создаём пустой элемент с заданными размерами
                                    balloonContent: '<div id="driver-2" class="driver-card">Hiii</div>',
                                }}
                            />
                        </Map>
                    </YMaps>
                </div>

                <div
                    className="absolute w-full px-5 flex items-stretch md:justify-evenly justify-between sm:bottom-10 lg:bottom-5 bottom-9 sm:flex-row flex-col"
                >
                    <article
                        className="bg-gray-700 text-center xl:px-14 px-3 sm:py-5 py-3 sm:rounded rounded-t md:w-1/4 flex sm:flex-col items-center sm:justify-center justify-between"
                    >
                        <h6 className="font-bold uppercase text-gray-400 sm:mb-2 md:text-base text-sm">Адрес: </h6>
                        <p className="md:text-sm text-xs text-gray-100">
                            г. Москва Минская улица, 2Ж
                        </p>
                    </article>

                    <article
                        className="bg-gray-700 text-center xl:px-14 px-3 sm:py-5 py-2 sm:rounded md:w-1/4 flex sm:flex-col items-center sm:justify-center justify-between"
                    >
                        <h6 className="font-bold uppercase text-gray-400 sm:mb-2 md:text-base text-sm">Телефон: </h6>
                        <a className="md:text-sm text-xs text-gray-100 underline" href="tel:+7 (495) 21-21-799">
                            +7 (495) 21-21-799
                        </a>
                    </article>

                    <article
                        className="bg-gray-700 text-center xl:px-14 px-3 sm:py-5 py-3 sm:rounded rounded-b md:w-1/4 flex sm:flex-col items-center sm:justify-center justify-between"
                    >
                        <h6 className="font-bold uppercase text-gray-400 sm:mb-2 md:text-base text-sm">E-mail: </h6>
                        <a className="md:text-sm text-xs text-gray-100 underline" href="mailto:info@minskayaplaza.ru">
                            info@minskayaplaza.ru
                        </a>
                    </article>
                </div>
            </div>
        </div>
    );
}