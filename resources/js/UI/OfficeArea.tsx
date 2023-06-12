import {IOffice} from "@/store/offices/offices.api.ts";
import React from "react";

export const OfficeArea = ({office}: {office: IOffice}) => (
    <>
        {office.areaMin == office.areaMax
                ? <>{office.areaMin} <span> м<sup>2</sup></span></>
                : <>от {office.areaMin} <span> м<sup>2</sup></span> до {office.areaMax} <span> м<sup>2</sup></span></>
        }
    </>
)