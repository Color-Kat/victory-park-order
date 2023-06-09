import React, {ReactNode} from 'react';
import ReactFullpage, {fullpageOptions} from "@fullpage/react-fullpage";

export function FullPageHOC(WrappedComponent: any, options?: fullpageOptions) {
    return () => {


        return (
            <div className="lg:overflow-hidden relative w-full">
                <ReactFullpage
                    licenseKey = {'YOUR_KEY_HERE'}
                    scrollingSpeed = {1000} /* Options here */
                    anchors={options?.anchors ?? []}
                    navigation={true}
                    navigationPosition="left"
                    responsiveWidth={1024}
                    credits={{
                        enabled: true,
                    }}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <WrappedComponent fullpageApi={fullpageApi}/>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        );
    }
}