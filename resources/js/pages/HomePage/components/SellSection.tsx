import React, {useCallback} from 'react';
import {useGetSellOfficesQuery} from "@/store/offices/offices.api.ts";
import {useTDispatch} from "@hooks/redux.ts";
import {openOfficeModal} from "@/store/modals/modals.slice.tsx";

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
            <h2 className="font-metapro lg:text-6xl md:text-6xl xs:text-5xl text-3xl font-bold text-app-accent text-center lg:mb-16 mb-8">
                Офисы на Минской улице на продажу
            </h2>
            <div className="overflow-x-auto w-screen lg:w-full">
                <table
                    className="w-full table-auto"
                    id="office-rental-table"
                >
                    <thead className="">
                    <tr>
                        <td>Этаж</td>
                        <td>Площадь</td>
                        <td>Арендная<br/>ставка</td>
                        <td>Налоги</td>
                        <td>За помещение<br/>в месяц</td>
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
                                    {office.areaMin == office.areaMax
                                        ? <>{office.areaMin} <span> м<sup>2</sup></span></>
                                        : <>от {office.areaMin} <span> м<sup>2</sup></span> до {office.areaMax} <span> м<sup>2</sup></span></>
                                    }
                                </td>
                                <td>
                                    {office.explPrice.toLocaleString()} {office.explCur}
                                </td>
                                <td className="hidden-xs">
                                    {office.tax}
                                </td>
                                <td className="hidden-xs">
                                    {office.price.toLocaleString()} {office.priceCur}
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