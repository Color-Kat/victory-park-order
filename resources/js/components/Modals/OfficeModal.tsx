import React, {useState} from 'react';
import {useTDispatch, useTSelector} from "@hooks/redux.ts";

import {closeOfficeModal} from "@/store/modals/modals.slice.tsx";
import {useGetRentOfficesQuery, useGetSellOfficesQuery} from "@/store/offices/offices.api.ts";

interface ModalProps {

}

/**
 * Render all offices for ceo and open it by id
 * @constructor
 */
export const OfficeModal: React.FC<ModalProps> = ({}) => {

    const {officeModalOfficeId, officeModalOfficeType} = useTSelector(state => state.modals);
    const dispatch = useTDispatch();

    const closeModal = () => dispatch(closeOfficeModal());

    const {data: rentOffices = []} = useGetRentOfficesQuery();
    const {data: sellOffices = []} = useGetSellOfficesQuery();
    const offices = [
        ...rentOffices,
        ...sellOffices
    ];

    const currentOffice = offices.filter(office =>
        office.id == officeModalOfficeId &&
        office.typeDeal == officeModalOfficeType
    )[0];
    console.log(currentOffice)


    return (
        <div
            className={`${officeModalOfficeId ? 'opacity-1 translate-y-0 shadow-2xl' : 'opacity-0 -translate-y-8 pointer-events-none'} fixed w-screen h-screen top-0 left-0 bg-black/[.7] flex items-center justify-center z-50 transition duration-300`}
        >
            <div
                className="absolute top-0 left-0 w-full -m-16 h-full z-0"
                onClick={closeModal}
            />

            <div className="relative modal px-16 py-16 bg-white z-10">
                <div
                    className="absolute top-4 right-4 cursor-pointer font-bold text-gray-600 text-2xl"
                    onClick={closeModal}
                >
                    &#10005; {/* HTML code for a multiplication sign */}
                </div>

                <div className="">

                </div>
            </div>
        </div>
    );
}