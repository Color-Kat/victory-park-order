import React from 'react';
import {useTDispatch, useTSelector} from "@hooks/redux.ts";

import {closeModal} from "@/store/modal/modal.slice.tsx";

interface ModalProps {

}

export const CallRequestModal: React.FC<ModalProps> = ({}) => {

    const {isOpen} = useTSelector(state => state.modalCallRequest);
    const dispatch = useTDispatch();

    return (
        <div
            className={`${isOpen ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-16 pointer-events-none'} fixed w-screen h-screen top-0 left-0 text-3xl text-red-500 z-30 transition`}
            onClick={() => dispatch(closeModal())}
        >
            <div className="modal">
                <span className="modal-close">
                    &#10005; {/* HTML code for a multiplication sign */}
                </span>
                This is my new modal!
            </div>
        </div>
    );
}