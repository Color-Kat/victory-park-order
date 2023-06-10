import ReactFullpage, {fullpageApi} from '@fullpage/react-fullpage';

import Page from '@/components/PageTemplates/Page';
import React, {useEffect, useRef} from "react";
import {FullPageHOC} from "@components/PageTemplates/FullPage.tsx";

import scrollImage from "@assets/icons/scroll.png";
import firstScreenImg from "@assets/images/first-screen.jpg";
import {RedButton} from "@UI/Buttons";

interface IProps {
    fullpageApi: fullpageApi
}

export const HomePage = FullPageHOC(({fullpageApi}: IProps) => {
    const fullPageRef = useRef(null);

    useEffect(() => {

    }, [fullPageRef]);

    return (
        <>
            {/* Section 1 */}
            <div
                className="relative section w-full h-full lg:px-5 md:px-16 px-5 flex items-center justify-center fullpage-overlay"
                data-anchor="page-1"
            >
                <div className="flex flex-col justify-between">
                    <h1 className="font-metapro lg:text-8xl md:text-6xl xs:text-5xl text-4xl text-center font-bold lg:mb-16 mb-8">
                        Бизнес Центр Victory Park
                    </h1>

                    <div className="text-right text-lg">
                        <p>
                            Новый офисный центр класса B+ на западе Москвы.
                        </p>
                    </div>
                </div>

                <div className="lg:flex hidden w-full justify-center absolute bottom-[10%] left-0">
                    <a href="#page-2" id="down">
                        <img src={scrollImage}/>
                    </a>
                </div>

                <img
                    src={firstScreenImg}
                    alt=""
                    className="absolute w-full h-full top-0 left-0 object-cover z-[-1] object-right-top"
                />

                <div className="section-overlay hidden lg:block"/>
            </div>

            {/* Section 2 */}
            <div
                className="relative section w-full h-full lg:px-5 md:px-16 px-5 flex items-center justify-center fullpage-overlay"
                data-anchor="page-2"
            >
                <div className="flex flex-col justify-between text-center mb-8 max-w-4xl">
                    <h1 className="font-metapro lg:text-7xl md:text-6xl xs:text-5xl text-3xl font-bold lg:mb-16 mb-8">
                        Офисы на Минской улице
                    </h1>

                    <div className="text-lg">
                        <p>
                            Бизнес-центр Victory Park (ex. Минская Плаза) расположен рядом со станцией метро Минская в
                            Москве. На сайте бизнес-центра есть вся необходимая информация по свободным площадям.
                        </p>
                    </div>
                </div>

                <RedButton filled={true}>Узнать больше</RedButton>

                <img
                    src={firstScreenImg}
                    alt=""
                    className="absolute w-full h-full top-0 left-0 object-cover z-[-1] object-right-top"
                />
            </div>

            {/* Section 2 - table */}
            <div
                className="relative section w-full h-full lg:px-16 px-5 flex items-center justify-center"
                data-anchor="page-3"
            >
                <h2 className="font-metapro lg:text-6xl md:text-6xl xs:text-5xl text-3xl font-bold text-app-accent text-center lg:mb-16 mb-8">
                    Офисы на Минской улице в аренду
                </h2>
                <div className="">
                    <table
                        className="w-full table-auto"
                        id="office-rental-table"
                    >
                        <thead className="">
                        <tr>
                            <td>Этаж</td>
                            <td>Площадь</td>
                            <td>Арендная<br/>ставка</td>
                            <td>Налоги</td>
                            <td>За помещение<br/>в месяц</td>
                            <td>Состояние</td>
                        </tr>
                        </thead>
                        <tbody className="text-gray-900 text-sm border-separate ">
                        <tr
                            className="space-y-2"
                            href="/block/rent/37111"
                            data-href="/block/rent/37111"
                            data-block-id="37111"
                            data-block-type="rent"
                        >
                            <td>
                                <a href="/block/rent/37111">1 этаж</a>
                            </td>
                            <td>
                                <a href="/block/rent/37111">194 <span> м<sup>2</sup></span></a>
                            </td>
                            <td>
                                <a href="/block/rent/37111">19 550 руб.</a>
                            </td>
                            <td className="hidden-xs">
                                <a href="/block/rent/37111">Включая ндс</a>
                            </td>
                            <td className="hidden-xs">
                                <a href="/block/rent/37111">
                                    <span className="whitespace-nowrap">316 058 руб.</span>
                                </a>
                            </td>
                            <td>
                                <a href="/block/rent/37111">Готово к въезду </a>
                            </td>
                        </tr>
                        <tr className="tr-offer-table" href="/block/rent/38866"
                            data-href="/block/rent/38866" data-block-id="38866"
                            data-block-type="rent">
                            <td>
                                <a href="/block/rent/38866">1 этаж </a>
                            </td>
                            <td>
                                <a href="/block/rent/38866">
                                    от 94 <span> м<sup>2</sup></span> до
                                    890 <span> м<sup>2</sup></span>
                                </a>
                            </td>
                            <td>
                                <a href="/block/rent/38866">19 550 руб.</a>
                            </td>
                            <td className="hidden-xs">
                                <a href="/block/rent/38866">Включая ндс</a>
                            </td>
                            <td className="hidden-xs">
                                <a href="/block/rent/38866">
                                    <span className="whitespace-nowrap">153 142 руб.</span>
                                </a>
                            </td>
                            <td>
                                <a href="/block/rent/38866">Готово к въезду </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="section" data-anchor="block-2">
                <p>Section 2</p>
            </div>

            <div className="section" data-anchor="block-3">
                <p>Section 3</p>
            </div>
        </>
    );
}, {
    anchors: ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6'],
    credits
:
{
}
})
;