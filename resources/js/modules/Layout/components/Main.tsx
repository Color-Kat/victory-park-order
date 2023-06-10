import React from 'react';
import {Footer} from "@modules/Layout";

const Main: React.FC<{ children: React.ReactElement }> =
    ({children}) => {
        return (
            <>
                <main
                    className="flex-auto text-white scroll-container overflow-y-auto"
                >
                    {children}

                    <Footer />
                </main>
            </>

        );
    };

export default React.memo(Main);