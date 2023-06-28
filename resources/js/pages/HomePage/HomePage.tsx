
import React from "react";
import {fullpageApi} from '@fullpage/react-fullpage';

import {FullPageHOC} from "@components/PageTemplates/FullPage.tsx";

import {FirstSection} from "@pages/HomePage/components/FirstSection.tsx";
import {SecondSection} from "@pages/HomePage/components/SecondSection.tsx";
import {RentSection} from "@pages/HomePage/components/RentSection.tsx";
import {SellSection} from "@pages/HomePage/components/SellSection.tsx";
import {MapSection} from "@pages/HomePage/components/MapSection.tsx";
import {GallerySection} from "@pages/HomePage/components/GallerySection.tsx";
import {ContactsSection} from "@pages/HomePage/components/ContactsSection.tsx";

import {Footer} from "@modules/Layout";
import {useSettings} from "@hooks/useSettings.ts";
import {Helmet} from "react-helmet";

interface IProps {
    fullpageApi: fullpageApi
}

const {is_rent_active, is_sell_active} = useSettings(); // Get settings

export const HomePage = FullPageHOC(({fullpageApi}: IProps) => {

    return (
        <>
            <Helmet>
                <title>Бизнес-центр Каланчевская Плаза - аренда офисов и торговых площадей</title>
                <meta name="description" content="БЦ Каланчевская Плаза. Аренда и продажа офисных помещений" />
                <link rel="canonical" href={(import.meta as any).env.VITE_APP_URL + '/'}/>
            </Helmet>

            {/* Section 1 */}
            <FirstSection />

            {/* Section 2 */}
            <SecondSection />

            {/* Section 3 - table */}
            {is_rent_active && <RentSection />}

            {/* Section 4 */}
            {is_sell_active && <SellSection />}

            {/* Photo gallery section */}
            <GallerySection />

            {/* Section 6 - map */}
            <MapSection />

            <ContactsSection />

            <Footer />
        </>
    );
}, {
    anchors: [
        'page-1',
        'page-2',
        (is_rent_active && 'page-3'),
        (is_sell_active && 'page-4'),
        'page-5',
        'page-6',
        'page-7'
    ].filter(Boolean),
    credits: {}
});