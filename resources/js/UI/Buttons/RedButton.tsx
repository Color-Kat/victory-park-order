import React, {ReactNode} from 'react';

interface RedButtonProps {
    children: ReactNode;
    filled: boolean;
    onClick?: (e?: any) => void;
    className?: string;
}

export const RedButton: React.FC<RedButtonProps> = ({
                                                        children,
                                                        filled = true,
                                                        onClick,
                                                        className
                                                    }) => {


    return (
        <button className={
            `mx-auto uppercase border border-app-accent rounded cursor-pointer sm:p-3.5 p-2 sm:w-[200px] sm:h-[47px] flex justify-center transition-colors text-13
                ${filled
                ? 'bg-app-accent hover:bg-transparent text-white hover:text-app-accent'
                : 'bg-transparent hover:bg-app-accent text-app-accent hover:text-white'}
                ${className ?? ''}`
        }
                onClick={onClick}
        >
            {children}
        </button>
    );
}