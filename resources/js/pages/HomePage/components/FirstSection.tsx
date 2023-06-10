import React from 'react';
import scrollImage from "@assets/icons/scroll.png";
import firstScreenImg from "@assets/images/first-screen.jpg";

export const FirstSection: React.FC = ({}) => {


    return (
        <div
            className="relative section w-full h-full lg:px-5 md:px-16 px-5 flex items-center justify-center image-overlay"
            data-anchor="page-1"
            id="page-1-anchor"
        >
            <div className="flex flex-col justify-between">
                <h1 className="font-metapro lg:text-8xl md:text-6xl xs:text-5xl text-4xl text-center font-bold lg:mb-16 mb-8">
                    Бизнес Центр Victory Park
                </h1>

                <div className="text-right text-lg">
                    <p>
                        Новый офисный центр класса B+ на западе Москвы.
                    </p>
                </div>
            </div>

            <div className="lg:flex hidden w-full justify-center absolute bottom-[10%] left-0">
                <a href="#page-2" id="down">
                    <img src={scrollImage}/>
                </a>
            </div>

            <img
                src={firstScreenImg}
                alt=""
                className="absolute w-full h-full top-0 left-0 object-cover z-[-1] object-right-top"
            />

            <div className="section-overlay hidden lg:block"/>
        </div>
    );
}