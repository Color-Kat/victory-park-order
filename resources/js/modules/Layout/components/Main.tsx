import React, {useEffect, useRef} from 'react';
import {Footer} from "@modules/Layout";
import {useLocation} from "react-router-dom";

const Main: React.FC<{ children: React.ReactElement }> =
    ({children}) => {
        const { pathname } = useLocation();
        const scrollContainerRef = useRef<HTMLDivElement>(null);

        // Scroll to top
        useEffect(() => {
            scrollContainerRef.current?.scrollTo(0, 0);
        }, [pathname]);

        return (
            <>
                <main
                    className="flex-auto text-white scroll-container overflow-y-auto overflow-x-hidden"
                    ref={scrollContainerRef}
                >
                    {children}

                    <Footer />
                </main>
            </>

        );
    };

export default React.memo(Main);
