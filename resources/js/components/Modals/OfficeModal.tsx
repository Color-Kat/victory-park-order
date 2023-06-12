import React, {ReactNode, useCallback, useState} from 'react';
import {useTDispatch, useTSelector} from "@hooks/redux.ts";

import {closeOfficeModal} from "@/store/modals/modals.slice.tsx";
import {useGetRentOfficesQuery, useGetSellOfficesQuery} from "@/store/offices/offices.api.ts";
import {RedButton} from "@UI/Buttons";
import phone from "@assets/phone.png";
import {Gallery} from "@modules/Gallery";
import {PhoneNumber} from "@UI/Elements/PhoneNumber.tsx";
import {CallRequest} from "@components/CallRequest/CallRequest.tsx";

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

    return (
        <div
            className={`${officeModalOfficeId ? 'opacity-1 translate-y-0 shadow-2xl' : 'opacity-0 -translate-y-8 pointer-events-none'} fixed w-screen h-screen p-2 top-0 left-0 bg-black/[.7] flex items-center justify-center z-40 transition duration-300`}
        >
            <div
                className="absolute top-0 left-0 w-full h-full z-0"
                onClick={closeModal}
            />

            <div className="relative modal bg-white z-10 rounded overflow-y-auto mx-2 max-w-5xl lg:mx-auto max-h-full">
                <div
                    className="absolute top-4 right-4 cursor-pointer font-bold text-gray-800 text-3xl z-30"
                    onClick={closeModal}
                >
                    &#10005; {/* HTML code for a multiplication sign */}
                </div>

                {currentOffice && <div className="">
                    <div className="flex lg:flex-row flex-col">

                        <Gallery photos={currentOffice.photos} className="relative md:h-96 h-64 lg:min-w-[400px] w-full lg:flex-1"/>

                        <div className="lg:w-1/2 w-full flex flex-col bg-app">

                            <div className="flex md:px-8 px-2 pt-8 flex-col space-y-3 mb-4">

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

                                <PhoneNumber />

                                <CallRequest filledButton={true} data={{
                                    officeCrmId: currentOffice.crmId,
                                    officeSpace: `${currentOffice.areaMin} м2 - ${currentOffice.areaMax} м2 `
                                }}>
                                    Заказать звонок
                                </CallRequest>
                            </div>
                        </div>

                    </div>

                    <a href={`/${currentOffice.typeDeal}/${currentOffice.id}`} target="_blank">
                        <RedButton
                            filled={true}
                            className="my-4 ml-4"
                        >
                                Открыть в новом окне
                        </RedButton>
                    </a>


                </div>}
            </div>
        </div>
    );
}