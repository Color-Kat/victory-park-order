import React from 'react';
import {Footer} from "@modules/Layout";

const Main: React.FC<{ children: React.ReactElement }> =
    ({children}) => {
        return (
            <>
                <main
                    className="flex-auto flex justify-center flex-col text-white"
                >
                    {children}
                </main>
            </>

        );
    };

export default React.memo(Main);