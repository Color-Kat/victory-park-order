
import React from "react";
import {fullpageApi} from '@fullpage/react-fullpage';

import {FullPageHOC} from "@components/PageTemplates/FullPage.tsx";

import {FirstSection} from "@pages/HomePage/components/FirstSection.tsx";
import {SecondSection} from "@pages/HomePage/components/SecondSection.tsx";
import {ThridSection} from "@pages/HomePage/components/ThriSection.tsx";
import {FourthSection} from "@pages/HomePage/components/FourthSection.tsx";
import {MapSection} from "@pages/HomePage/components/MapSection.tsx";
import {GallerySection} from "@pages/HomePage/components/GallerySection.tsx";
import {ContactsSection} from "@pages/HomePage/components/ContactsSection.tsx";

import {Footer} from "@modules/Layout";

interface IProps {
    fullpageApi: fullpageApi
}

export const HomePage = FullPageHOC(({fullpageApi}: IProps) => {
    return (
        <>
            {/* Section 1 */}
            <FirstSection />

            {/* Section 2 */}
            <SecondSection />

            {/* Section 3 - table */}
            <ThridSection />

            {/* Section 4 */}
            <FourthSection />

            {/* Photo gallery section */}
            <GallerySection />

            {/* Section 6 - map */}
            <MapSection />

            <ContactsSection />

            <Footer />
        </>
    );
}, {
    anchors: ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6', 'page-7'],
    credits: {}
});