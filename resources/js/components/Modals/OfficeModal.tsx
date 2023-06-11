import React, {ReactNode, useCallback, useState} from 'react';
import {useTDispatch, useTSelector} from "@hooks/redux.ts";

import {closeOfficeModal} from "@/store/modals/modals.slice.tsx";
import {useGetRentOfficesQuery, useGetSellOfficesQuery} from "@/store/offices/offices.api.ts";
import {RedButton} from "@UI/Buttons";
import phone from "@assets/phone.png";

export const OfficeParameter: React.FC<{ title: string, children: ReactNode }> = ({title, children}) => (
    <div className="flex justify-between w-full gap-3">
        <div className="w-1/2">{title}:</div>
        <div className="w-1/2 whitespace-nowrap">{children}</div>
    </div>
);

/**
 * Render all offices for ceo and open it by id
 * @constructor
 */
export const OfficeModal: React.FC = () => {

    const {officeModalOfficeId, officeModalOfficeType} = useTSelector(state => state.modals);
    const dispatch = useTDispatch();

    const closeModal = () => dispatch(closeOfficeModal());

    const {data: rentOffices = []} = useGetRentOfficesQuery();
    const {data: sellOffices = []} = useGetSellOfficesQuery();
    const offices = [
        ...rentOffices,
        ...sellOffices
    ];

    const currentOffice = offices.filter(office =>
        office.id == officeModalOfficeId &&
        office.typeDeal == officeModalOfficeType
    )[0];


    const openOfficePage = useCallback(() => {
        console.log('open office' + currentOffice.id);
    }, [currentOffice?.id]);

    console.log(currentOffice?.areaMin, currentOffice?.areaMax)

    return (
        <div
            className={`${officeModalOfficeId ? 'opacity-1 translate-y-0 shadow-2xl' : 'opacity-0 -translate-y-8 pointer-events-none'} fixed w-screen h-screen top-0 left-0 bg-black/[.7] flex items-center justify-center z-50 transition duration-300`}
        >
            <div
                className="absolute top-0 left-0 w-full -m-16 h-full z-0"
                onClick={closeModal}
            />

            <div className="relative modal bg-white z-10 rounded overflow-hidden mx-2">
                <div
                    className="absolute top-4 right-4 cursor-pointer font-bold text-gray-800 text-3xl"
                    onClick={closeModal}
                >
                    &#10005; {/* HTML code for a multiplication sign */}
                </div>

                {currentOffice && <div className="">
                    <div className="flex lg:flex-row flex-col">

                        <img src={currentOffice.photos[0]} alt="" className="h-96 lg:min-w-[400px] flex-1 object-contain w-auto"/>

                        <div className="lg:w-1/2 w-full flex flex-col bg-app">

                            <div className="flex px-8 pt-8 flex-col space-y-3 mb-4">

                                <OfficeParameter title="Этаж">{currentOffice.floor} этаж</OfficeParameter>

                                <OfficeParameter title="Арендуемая площадь">{currentOffice.areaMin == currentOffice.areaMax
                                    ? <>{currentOffice.areaMin} <span> м<sup>2</sup></span></>
                                    : <>от {currentOffice.areaMin} <span> м<sup>2</sup></span> до {currentOffice.areaMax} <span> м<sup>2</sup></span></>
                                }</OfficeParameter>

                                <OfficeParameter title="Готовность">{currentOffice.isReady}</OfficeParameter>

                                <OfficeParameter title="Ставка аренды">{currentOffice.explPrice} {currentOffice.explCur}/м<sup>2</sup> в год</OfficeParameter>

                                <OfficeParameter title="За помещение в месяц">{currentOffice.price} {currentOffice.priceCur}/м<sup>2</sup> в месяц</OfficeParameter>

                                <OfficeParameter title="Налогообложение">{currentOffice.tax}</OfficeParameter>

                            </div>

                            <div
                                className="flex items-center sm:flex-row mt-auto flex-col sm:gap-16 gap-5 bg-[#d7d7d7] w-full pt-12 pb-6 lg:px-8 px-4 ">
                                <div className="flex gap-1.5 items-center">
                                    <img className="h-4" src={phone} alt="phone"/>
                                    <a className="text-lg font-bold cursor-pointer whitespace-nowrap"
                                       href="tel:+74952121799">
                                        +7 (495) 21-21-799
                                    </a>
                                </div>

                                <RedButton filled={true}>
                                    Заказать звонок
                                </RedButton>
                            </div>
                        </div>

                    </div>

                    <RedButton
                        filled={true}
                        onClick={openOfficePage}
                        className="my-4 ml-4"
                    >Открыть в новом окне</RedButton>

                </div>}
            </div>
        </div>
    );
}