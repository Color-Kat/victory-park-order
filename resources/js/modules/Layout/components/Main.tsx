import React from 'react';

const Main: React.FC<{ children: React.ReactElement }> =
    ({children}) => {
        return (
            <>
                <main
                    className="flex-auto flex-shrink-0 flex justify-center bg-gray-700 w-full"
                >
                    <div className="text-white">
                        {children}
                    </div>
                </main>
            </>

        );
    };

export default React.memo(Main);