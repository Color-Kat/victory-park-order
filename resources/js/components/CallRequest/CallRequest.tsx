import React from 'react';
import {RedButton} from "@UI/Buttons";
import {useTDispatch} from "@hooks/redux.ts";
import {openCallRequestModal} from "@/store/modals/modals.slice.tsx";

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
            onClick={() => dispatch(openCallRequestModal())}
            className={className}
        >
            {children}
        </RedButton>
    );
}