import React from 'react';
import {RedButton} from "@UI/Buttons";
import firstScreenImg from "@assets/images/first-screen.jpg";


export const SellSection: React.FC = ({}) => {


    return (
        <div
            className="relative section w-full h-full lg:px-16 px-5 flex items-center justify-center"
            data-anchor="page-4"
            id="page-4-anchor"
        >
            <h2 className="font-metapro lg:text-6xl md:text-6xl xs:text-5xl text-3xl font-bold text-app-accent text-center lg:mb-16 mb-8">
                Офисы на Минской улице на продажу
            </h2>
            <div className="overflow-x-auto w-screen lg:w-full">
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
                        // href="/block/rent/37111"
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
                    <tr
                        className="tr-offer-table"
                        // href="/block/rent/38866"
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
    );
}