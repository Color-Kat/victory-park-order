import React, {ReactNode, useCallback, useState} from 'react';
import {useTDispatch, useTSelector} from "@hooks/redux.ts";

import {closeOfficeModal, openWhatsAppRequestModal} from "@/store/modals/modals.slice.tsx";
import {useGetRentOfficesQuery, useGetSellOfficesQuery} from "@/store/offices/offices.api.ts";
import {RedButton} from "@UI/Buttons";
import phone from "@assets/phone.png";
import {Gallery} from "@modules/Gallery";
import {PhoneNumber} from "@UI/Elements/PhoneNumber.tsx";
import {CallRequestButton} from "@components/CallRequest/CallRequestButton.tsx";
import {OfficeArea} from "@UI/OfficeArea.tsx";
import {monthPrice, rents} from "@/utils/officeParameters.ts";
import {BsWhatsapp} from "react-icons/bs";

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

                                <OfficeParameter title={currentOffice.typeDeal == 'rent' ? 'Арендуемая площадь' : 'Площадь'}>
                                    <OfficeArea office={currentOffice} />
                                </OfficeParameter>

                                <OfficeParameter title="Готовность">{currentOffice.isReady}</OfficeParameter>

                                <OfficeParameter title={currentOffice.typeDeal == 'rent' ? 'Ставка аренды' : 'Цена за м2'}>
                                    {/*{currentOffice.explPrice} {currentOffice.explCur}/м<sup>2</sup> в год*/}
                                    {rents(currentOffice)}
                                </OfficeParameter>

                                <OfficeParameter title={currentOffice.typeDeal == 'rent' ? 'За помещение в месяц' : 'Стоимость'}>
                                    {/* {currentOffice.price} {currentOffice.priceCur}/м<sup>2</sup> в месяц*/}
                                    {monthPrice(currentOffice, true)}
                                </OfficeParameter>

                                <OfficeParameter title="Налогообложение">{currentOffice.tax}</OfficeParameter>

                            </div>

                            <div
                                className="flex items-center sm:flex-row mt-auto flex-col sm:gap-16 gap-5 bg-[#d7d7d7] w-full pt-12 pb-6 lg:px-8 px-4 ">

                                <PhoneNumber />

                                <CallRequestButton filledButton={true} data={{
                                    officeCrmId: currentOffice.crmId,
                                    officeSpace: `${currentOffice.areaMin} - ${currentOffice.areaMax} м2 `
                                }}>
                                    Заказать звонок
                                </CallRequestButton>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-between my-4 px-4 gap-2">
                        <a href={`/${currentOffice.typeDeal}/${currentOffice.crmId}`} target="_blank">
                            <RedButton
                                filled={true}
                                className=""
                            >
                                Открыть в новом окне
                            </RedButton>
                        </a>

                        <button className="uppercase border border-[#4ed35d] rounded cursor-pointer sm:p-3.5 p-2 sm:w-[200px] sm:h-[47px] flex justify-center transition-colors text-13 bg-[#4ed35d] hover:bg-transparent text-white hover:text-[#4ed35d] flex items-center"
                                onClick={() => dispatch(openWhatsAppRequestModal({
                                    officeCrmId: currentOffice.crmId,
                                    officeSpace: `${currentOffice.areaMin} - ${currentOffice.areaMax} м2 `
                                }))}
                        >
                            <BsWhatsapp className="text-xl mr-2" />
                            Презентация
                        </button>

                    </div>


                </div>}
            </div>
        </div>
    );
}