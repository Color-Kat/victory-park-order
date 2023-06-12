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
import {Page404} from "@pages/ErrorPages/Page404.tsx";
import {Helmet} from "react-helmet";
import {officeArea} from "@/utils/officeArea.ts";


export const OfficeParameter: React.FC<{ title: string, children: ReactNode }> = ({title, children}) => {
    return (
        <div className="flex justify-between py-5 px-5 border-b border-gray-300 cursor-pointer hover:bg-app">
            <div className="w-1/2">{title}:</div>
            <div className="w-1/2">{children}</div>
        </div>
    );
}

export const RentOfficePage: React.FC = ({}) => {
    const {officeId} = useParams();
    const {data: office, isLoading} = useGetOfficeByIdQuery({
        typeDeal: 'rent',
        id: +officeId!
    });

    return (
        <div className="w-full pb-10 px-5">
            {office &&
                <div className="">

                    <Helmet>
                        <title>Аренда офиса {officeArea(office)} в бизнес-центре Victory Park</title>
                        <meta name="description" content={`Аренда офисов в бизнес-центре Victory Park (Минская Плаза). Площадь ${officeArea(office)}, ${office.floor} этаж.`} />
                        <meta name="keywords" content="бц Victory Park, аренда офиса в БЦ Victory Park, снять офис в БЦ Victory Park, бц Минская Плаза" />
                    </Helmet>

                    <div className="lg:my-12 my-6 px-5">
                        <h2 className="font-metapro lg:text-6xl md:text-6xl xs:text-5xl text-3xl max-w-5xl mx-auto font-bold text-app-accent text-center">
                            Аренда офиса <OfficeArea office={office}/> в бизнес-центре Victory Park
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

                            <div
                                className="flex flex-col border-l border border-b-0 text-sm text-gray-800 border-gray-300 h-max">
                                <OfficeParameter title="Этаж">
                                    {office.floor} этаж
                                </OfficeParameter>

                                <OfficeParameter title="Арендуемая площадь">
                                    <OfficeArea office={office}/>
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
                                <CallRequest
                                    className="ml-0"
                                    filledButton={true}
                                    data={{
                                        officeCrmId: office.crmId,
                                        officeSpace: `${office.areaMin} м2 - ${office.areaMax} м2 `
                                    }}
                                >
                                    Обратный звонок
                                </CallRequest>

                                <PhoneNumber className="text-black"/>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {!office && !isLoading && <Page404 />}
        </div>
    );
}