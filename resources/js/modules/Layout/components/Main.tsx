import React from 'react';

const Main: React.FC<{ children: React.ReactElement }> =
    ({children}) => {
        return (
            <>
                <main
                    className="flex-auto flex justify-center bg-gray-700 text-white"
                >
                    {children}
                </main>
            </>

        );
    };

export default React.memo(Main);