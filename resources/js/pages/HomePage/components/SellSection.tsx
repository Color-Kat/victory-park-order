import React, {useCallback} from 'react';
import {useGetSellOfficesQuery} from "@/store/offices/offices.api.ts";
import {useTDispatch} from "@hooks/redux.ts";
import {openOfficeModal} from "@/store/modals/modals.slice.tsx";
import {OfficeArea} from "@UI/OfficeArea.tsx";
import {monthPrice, rents, sellM2Price, sellPrice} from "@/utils/officeParameters.ts";

export const SellSection: React.FC = ({}) => {
    const {data: offices} = useGetSellOfficesQuery();

    const dispatch = useTDispatch();

    const openOffice = useCallback((id: number) => {
        dispatch(openOfficeModal({
            id,
            type: 'sell'
        }));
    }, []);

    return (
        <div
            className="relative section w-full h-full lg:px-16 px-5 flex items-center justify-center"
            data-anchor="page-4"
            id="page-4-anchor"
        >
            <h2 className="font-metapro lg:text-6xl md:text-6xl xs:text-5xl text-3xl font-bold text-app-accent text-center lg:my-16 my-8 no-scrollbar">
                {(import.meta as any).env.VITE_SELL_TITLE}
            </h2>
            <div className="md:overflow-x-auto overflow-x-scroll w-screen lg:w-full px-2">
                <table
                    className="w-full table-auto"
                    id="office-rental-table"
                >
                    <thead className="">
                    <tr>
                        <td>Этаж</td>
                        <td>Площадь</td>
                        <td>Цена за м<sup>2</sup></td>
                        <td>Налоги</td>
                        <td>Стоимость</td>
                        <td>Состояние</td>
                    </tr>
                    </thead>
                    <tbody className="text-gray-900 text-sm border-separate ">
                    {offices?.map(office => {
                        return (
                            <tr
                                className="space-y-2"
                                data-href={"/sell/"+office.id}
                                data-block-id={office.crmId}
                                data-block-type="rent"
                                onClick={() => openOffice(office.id)}
                                key={office.id}
                            >
                                <td>
                                    {office.floor} этаж
                                </td>
                                <td>
                                    <OfficeArea office={office} />
                                </td>
                                <td className="">
                                    {sellM2Price(office)}
                                </td>
                                <td className="">
                                    {office.tax}
                                </td>
                                <td className="whitespace-nowrap">
                                    {sellPrice(office)}
                                </td>
                                <td>
                                    {office.isReady}
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}