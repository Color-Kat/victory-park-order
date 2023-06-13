import {IOffice} from "@/store/offices/offices.api.ts";
import React from "react";

export const OfficeArea = ({office}: {office: IOffice}) => (
    <>
        {office.areaMin > 0
            ? <>от {office.areaMin} до {office.areaMax} <span> м<sup>2</sup></span></>
            : <>{office.areaMax} <span> м<sup>2</sup></span></>
        }
    </>
)