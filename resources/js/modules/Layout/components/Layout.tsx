import React, {memo} from "react";

import {Header} from "./Header";
import Main from "./Main";
import {Footer} from "@modules/Layout";
// import Footer from "./Footer";

export const Layout: React.FC<{ children: React.ReactElement }> = memo(({children}) => {

    return (
        <div
            className="scroll-container flex lg:flex-row flex-col h-screen overflow-auto overflow-x-hidden font-circle bg-white"
        >

            <Header/>

            <Main>
                {children}

            </Main>

            {/*<Footer />*/}
        </div>
    );
});