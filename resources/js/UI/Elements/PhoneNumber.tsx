import React from 'react';
import phone from "@assets/phone.png";

export const PhoneNumber: React.FC<{className?: string}> = ({className}) => (
    <div className={`flex gap-1.5 items-center ${className}`}>
        <img className="h-4" src={phone} alt="phone"/>
        <a className="sm:text-lg font-bold cursor-pointer whitespace-nowrap" href={`tel:${(import.meta as any).env.VITE_PHONE}`}>
            {(import.meta as any).env.VITE_PHONE}
        </a>
    </div>
);