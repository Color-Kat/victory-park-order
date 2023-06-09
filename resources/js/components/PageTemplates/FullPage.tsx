import React, {ReactNode} from 'react';
import ReactFullpage, {fullpageOptions} from "@fullpage/react-fullpage";

export function FullPageHOC(WrappedComponent: any, options?: fullpageOptions) {
    return () => {


        return (
            <div className="overflow-hidden relative">
                <ReactFullpage
                    licenseKey = {'YOUR_KEY_HERE'}
                    scrollingSpeed = {1000} /* Options here */
                    anchors={options?.anchors ?? []}
                    navigation={true}
                    navigationPosition="left"
                    credits={{
                        enabled: false,
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