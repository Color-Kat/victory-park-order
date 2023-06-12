import React, {ReactNode} from 'react';
import ImageGallery from 'react-image-gallery';

import phone from "@assets/phone.png";
import {RedButton} from "@UI/Buttons";
import {useGetOfficeByIdQuery} from "@/store/offices/offices.api.ts";
import {useParams} from "react-router-dom";

import "react-image-gallery/styles/scss/image-gallery.scss";
import {OfficeArea} from "@UI/OfficeArea.tsx";
import {PhoneNumber} from "@UI/Elements/PhoneNumber.tsx";
import {CallRequest} from "@components/CallRequest/CallRequest.tsx";


export const OfficeParameter: React.FC<{title: string, children: ReactNode}> = ({title, children}) => {
    return (
        <div className="flex justify-between py-5 px-5 border-b border-gray-300 cursor-pointer hover:bg-app">
            <div className="w-1/2">{title}:</div>
            <div className="w-1/2">{children}</div>
        </div>
    );
}

export const RentPage: React.FC = ({}) => {
    const {officeId} = useParams();
    const {data: office} = useGetOfficeByIdQuery({
        typeDeal: 'rent',
        id: +officeId!
    });

    return (
        <div className="w-full pb-10 px-5">
            {office &&
                <div className="">

                    <div className="lg:my-12 my-6 px-5">
                        <h2 className="font-metapro lg:text-6xl md:text-6xl xs:text-5xl text-3xl max-w-5xl mx-auto font-bold text-app-accent text-center">
                            Аренда офиса <OfficeArea office={office} /> в бизнес-центре Victory Park
                        </h2>
                    </div>

                    <div className="flex lg:flex-row gap-5 flex-col max-w-7xl mx-auto">
                        <ImageGallery
                            items={office.photos.map(item => ({
                                original: item,
                                thumbnail: item
                            }))}
                            additionalClass="xl:max-w-xl md:max-w-md w-full mx-auto flex-1"
                            infinite
                            showThumbnails
                            showFullscreenButton
                            showPlayButton={false}
                        />

                        <div className="flex-1">

                            <div className="flex flex-col border-l border border-b-0 text-sm text-gray-800 border-gray-300 h-max">
                                <OfficeParameter title="Этаж">
                                    {office.floor} этаж
                                </OfficeParameter>

                                <OfficeParameter title="Арендуемая площадь">
                                    <OfficeArea office={office} />
                                </OfficeParameter>

                                <OfficeParameter title="Готовность">
                                    {office.isReady}
                                </OfficeParameter>

                                <OfficeParameter title="Планировка">
                                    {office.layout}
                                </OfficeParameter>

                                <OfficeParameter title="Цена">
                                    {office.price} {office.priceCur} за м<sup>2</sup> в год
                                </OfficeParameter>

                                <OfficeParameter title="Эксплуатационные расходы">
                                    {office.explPrice} {office.explCur} за м<sup>2</sup> в год
                                </OfficeParameter>

                                <OfficeParameter title="Налогообложение">
                                    {office.tax}
                                </OfficeParameter>
                            </div>

                            <div className="my-5 flex justify-between items-center">
                                <CallRequest className="ml-0">Обратный звонок</CallRequest>

                                <PhoneNumber className="text-black" />
                            </div>
                        </div>
                    </div>

                    {/*<div className="lg:w-1/2 w-full flex flex-col bg-app">*/}

                    {/*    <div className="flex md:px-8 px-2 pt-8 flex-col space-y-3 mb-4">*/}

                            {/*<OfficeParameter title="Этаж">{currentOffice.floor} этаж</OfficeParameter>*/}

                            {/*<OfficeParameter title="Арендуемая площадь">{currentOffice.areaMin == currentOffice.areaMax*/}
                            {/*    ? <>{currentOffice.areaMin} <span> м<sup>2</sup></span></>*/}
                            {/*    : <>от {currentOffice.areaMin} <span> м<sup>2</sup></span> до {currentOffice.areaMax} <span> м<sup>2</sup></span></>*/}
                            {/*}</OfficeParameter>*/}

                            {/*<OfficeParameter title="Готовность">{currentOffice.isReady}</OfficeParameter>*/}

                            {/*<OfficeParameter title="Ставка аренды">{currentOffice.explPrice} {currentOffice.explCur}/м<sup>2</sup> в год</OfficeParameter>*/}

                            {/*<OfficeParameter title="За помещение в месяц">{currentOffice.price} {currentOffice.priceCur}/м<sup>2</sup> в месяц</OfficeParameter>*/}

                            {/*<OfficeParameter title="Налогообложение">{currentOffice.tax}</OfficeParameter>*/}

                    {/*    </div>*/}

                    {/*    <div*/}
                    {/*        className="flex items-center sm:flex-row mt-auto flex-col sm:gap-16 gap-5 bg-[#d7d7d7] w-full pt-12 pb-6 lg:px-8 px-4 ">*/}
                    {/*        <div className="flex gap-1.5 items-center">*/}
                    {/*            <img className="h-4" src={phone} alt="phone"/>*/}
                    {/*            <a className="text-lg font-bold cursor-pointer whitespace-nowrap"*/}
                    {/*               href="tel:+74952121799">*/}
                    {/*                +7 (495) 21-21-799*/}
                    {/*            </a>*/}
                    {/*        </div>*/}

                    {/*        <RedButton filled={true}>*/}
                    {/*            Заказать звонок*/}
                    {/*        </RedButton>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            }
        </div>
    );
}