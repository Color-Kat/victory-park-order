import React, {ReactNode} from 'react';
import ImageGallery from 'react-image-gallery';
import {useGetOfficeByCrmIdQuery} from "@/store/offices/offices.api.ts";
import {useParams} from "react-router-dom";

import "react-image-gallery/styles/scss/image-gallery.scss";
import {OfficeArea} from "@UI/OfficeArea.tsx";
import {PhoneNumber} from "@UI/Elements/PhoneNumber.tsx";
import {CallRequestButton} from "@components/CallRequest/CallRequestButton.tsx";
import {Page404} from "@pages/Other/Page404.tsx";
import {Helmet} from "react-helmet";
import {monthPrice, officeArea} from "@/utils/officeParameters";
import {TermsFooter} from "@modules/Layout/components/TermsFooter.tsx";


export const OfficeParameter: React.FC<{title: string, children: ReactNode}> = ({title, children}) => {
    return (
        <div className="flex justify-between py-5 px-5 border-b border-gray-300 cursor-pointer hover:bg-app">
            <div className="w-1/2">{title}:</div>
            <div className="w-1/2">{children}</div>
        </div>
    );
}

export const SellOfficePage: React.FC = ({}) => {
    const {officeCrmId} = useParams();
    const {data: office, isLoading} = useGetOfficeByCrmIdQuery({
        typeDeal: 'sell',
        crmId: +officeCrmId!
    });

    const BC_name = (import.meta as any).env.VITE_BC_NAME;

    return (
        <div className="relative w-full min-h-screen pb-32">
            {office &&
                <div className="pb-14 px-5">

                    <Helmet>
                        <title>Продажа офиса {officeArea(office)} в бизнес-центре {(import.meta as any).env.VITE_BC_NAME}</title>
                        <meta name="description" content={`Продажа офисов в бизнес-центре ${BC_name}. Площадь ${officeArea(office)}, ${office.floor} этаж.`} />
                        <meta name="keywords" content={`бц ${BC_name}, купить офис в БЦ ${BC_name}, продажа офиса в БЦ ${BC_name}`} />
                        <link rel="canonical" href={(import.meta as any).env.VITE_APP_URL + '/sell/' + officeCrmId}/>
                    </Helmet>

                    <div className="lg:py-12 py-6 px-5">
                        <h1 className="font-metapro lg:text-6xl md:text-6xl xs:text-5xl text-3xl max-w-5xl mx-auto font-bold text-app-accent text-center">
                            Продажа офиса <OfficeArea office={office} /> в бизнес-центре {BC_name}
                        </h1>
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

                                <OfficeParameter title="Продаваемая площадь">
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

                                <OfficeParameter title="За помещение в месяц">
                                    {monthPrice(office, true)}
                                </OfficeParameter>

                                <OfficeParameter title="Налогообложение">
                                    {office.tax}
                                </OfficeParameter>
                            </div>

                            <div className="my-5 flex gap-3 justify-between items-center">
                                <CallRequestButton
                                    className="ml-0"
                                    filledButton={true}
                                    data={{
                                        officeCrmId: office.crmId,
                                        officeSpace: `${office.areaMin} м2 - ${office.areaMax} м2 `
                                    }}
                                >
                                    Обратный звонок
                                </CallRequestButton>

                                <PhoneNumber className="text-black" />
                            </div>
                        </div>
                    </div>
                </div>
            }

            {!office && !isLoading && <Page404 />}

            <TermsFooter />
        </div>
    );
}