import ReactFullpage, {fullpageApi} from '@fullpage/react-fullpage';

import Page from '@/components/PageTemplates/Page';
import React, {useEffect, useRef} from "react";
import {FullPageHOC} from "@components/PageTemplates/FullPage.tsx";

import scrollImage from "@assets/icons/scroll.png";
import firstScreenImg from "@assets/images/first-screen.jpg";
import {RedButton} from "@UI/Buttons";
import {FirstSection} from "@pages/HomePage/components/FirstSection.tsx";
import {SecondSection} from "@pages/HomePage/components/SecondSection.tsx";
import {ThridSection} from "@pages/HomePage/components/ThriSection.tsx";
import {FourthSection} from "@pages/HomePage/components/FourthSection.tsx";
import {MapSection} from "@pages/HomePage/components/MapSection.tsx";
import {GallerySection} from "@pages/HomePage/components/GallerySection.tsx";
import {ContactsSection} from "@pages/HomePage/components/ContactsSection.tsx";

interface IProps {
    fullpageApi: fullpageApi
}

export const HomePage = FullPageHOC(({fullpageApi}: IProps) => {
    const fullPageRef = useRef(null);

    useEffect(() => {

    }, [fullPageRef]);

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

            <footer className="w-full bg-app px-[50px] pb-5 pt-4 text-[#3b4256] flex-col text-center">
                <div className="mb-8"><a href="" className="uppercase text-xs">Инфраструктура</a></div>

                <RedButton filled={true} className="sm:px-12 sm:w-auto w-max">
                    Оставить заявку
                </RedButton>

                <div className="copyright text-center text-13 mt-5">
                    <span>
                        © 2023 Бизнес-центр<br/>
                        Victory Park.<br/>
                        Все права защищены
                    </span>
                </div>
            </footer>
        </>
    );
}, {
    anchors: ['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6'],
    credits: {}
});