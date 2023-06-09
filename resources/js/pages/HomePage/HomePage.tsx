import ReactFullpage, {fullpageApi} from '@fullpage/react-fullpage';

import Page from '@/components/PageTemplates/Page';
import React, {useEffect, useRef} from "react";
import {FullPageHOC} from "@components/PageTemplates/FullPage.tsx";

interface IProps {
    fullpageApi: fullpageApi
}

export const HomePage = FullPageHOC(({fullpageApi}: IProps) => {
    const fullPageRef = useRef(null);

    useEffect(() => {

    }, [fullPageRef]);

    return (
        <>
            <div className="section" data-anchor="block-1">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                </button>
            </div>

            <div className="section" data-anchor="block-2">
                <p>Section 2</p>
            </div>

            <div className="section" data-anchor="block-3">
                <p>Section 3</p>
            </div>
        </>
    );
});