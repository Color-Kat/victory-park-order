import React from 'react';
import {RedButton} from "@UI/Buttons";
import {useTDispatch} from "@hooks/redux.ts";
import {openModal} from "@/store/modal/modal.slice.tsx";

interface CallRequestProps {
    filledButton?: boolean;
    children: string;
    className?: string;
}

export const CallRequest: React.FC<CallRequestProps> = ({
                                                            filledButton = true,
                                                            children,
                                                            className
                                                        }) => {

    const dispatch = useTDispatch();

    return (
        <RedButton
            filled={filledButton}
            onClick={() => dispatch(openModal())}
            className={className}
        >
            {children}
        </RedButton>
    );
}