import {IOffice} from "@/store/offices/offices.api.ts";
import React from "react";

export const officeArea = (office: IOffice): string => {
    return office.areaMin == office.areaMax
        ? `${office.areaMin} м2`
        : `от ${office.areaMin} м2 до ${office.areaMax} м2`
    ;
}