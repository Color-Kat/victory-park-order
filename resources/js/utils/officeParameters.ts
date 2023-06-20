import {IOffice} from "@/store/offices/offices.api.ts";
import React from "react";

/*
    Площадь офиса от * до *
 */
export const officeArea = (office: IOffice): string => {
    return office.areaMin > 0
        ? `от ${office.areaMin} до ${office.areaMax} м2`
        : `${office.areaMax} м2`
    ;
}

/*
    Цена в месяц за площадь от areaMin о areaMax
 */
export const monthPrice = (office: IOffice, showPerMonth = false) => {
    if(office.price === -1) return "Договорная";

    const roundM2Price = Math.round((office.price + office.explPrice) / 12);

    return (
        office.areaMin > 0
        ? `${(roundM2Price * office.areaMin).toLocaleString()} - 
            ${(roundM2Price * office.areaMax).toLocaleString()}`
        : `${(roundM2Price * office.areaMax).toLocaleString()}`
    ) + ` ${office.priceCur}${office.typeDeal == 'rent' ? '/мес.' : ''}` ;
}

/*
    Арендная ставка
 */
export const rents = (office: IOffice) => {
    if(office.price === -1) return "Договорная";
    return `${(office.explPrice + office.price).toLocaleString()} ${office.priceCur}`;
}

/*
    Стоимость офиса за м2 для продажи
 */
export const sellM2Price = (office: IOffice) => {
    if(office.price === -1) return "Договорная";
    return `${(office.price).toLocaleString()} ${office.priceCur}`;
}

/*
    Стоимость офиса для продажи
 */
export const sellPrice = (office: IOffice) => {
    if(office.price === -1) return "Договорная";
    // return `${(office.price * office.areaMax).toLocaleString()} ${office.priceCur}`;

    return (
        office.areaMin > 0
            ? `${(office.price * office.areaMin).toLocaleString()} - 
                ${(office.price * office.areaMax).toLocaleString()}`
            : `${(office.price * office.areaMax).toLocaleString()}`
    ) + ` ${office.priceCur}`;
}