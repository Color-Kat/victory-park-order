import React from 'react';
import phone from "@assets/phone.png";

export const PhoneNumber: React.FC<{className?: string}> = ({className}) => (
    <div className={`flex gap-1.5 items-center ${className}`}>
        <img className="h-4" src={phone} alt="phone"/>
        <a className="sm:text-lg font-bold cursor-pointer whitespace-nowrap" href="tel:+74952121799">
            +7 (495) 21-21-799
        </a>
    </div>
);