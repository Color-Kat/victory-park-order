import React from 'react';

const Main: React.FC<{ children: React.ReactElement }> =
    ({children}) => {
        return (
            <>
                <main
                    className="flex-auto flex justify-center  text-white"
                >
                    {children}
                </main>
            </>

        );
    };

export default React.memo(Main);