import React from 'react';
import ImageGallery from 'react-image-gallery';

import phone from "@assets/phone.png";
import {RedButton} from "@UI/Buttons";
import {useGetOfficeByIdQuery} from "@/store/offices/offices.api.ts";
import {useParams} from "react-router-dom";

import "react-image-gallery/styles/scss/image-gallery.scss";
import {OfficeArea} from "@UI/OfficeArea.tsx";


export const RentPage: React.FC = ({}) => {
    const {officeId} = useParams();
    const {data: office} = useGetOfficeByIdQuery({
        typeDeal: 'rent',
        id: +officeId!
    });

    console.log(office, office?.photos.map(item => ({original: item})))

    return (
        <div className="w-full h-full">
            {office &&
                <div className="flex lg:flex-row flex-col relative">

                    <div className="lg:my-12 my-6">
                        <h2 className="font-metapro lg:text-6xl md:text-6xl xs:text-5xl text-3xl font-bold text-app-accent text-center">
                            Аренда офиса <OfficeArea office={office} />
                        </h2>
                    </div>

                    <ImageGallery
                        items={office.photos.map(item => ({
                            original: item,
                            thumbnail: item
                        }))}
                        additionalClass="max-w-md"
                        infinite
                        showThumbnails
                        showFullscreenButton
                        showPlayButton={false}
                        // showNav
                    />;

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