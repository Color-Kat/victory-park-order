import React from 'react';
import {RedButton} from "@UI/Buttons";
import firstScreenImg from "@assets/images/first-screen.jpg";


export const GallerySection: React.FC = ({}) => {


    return (
        <div
            className="relative section w-full h-full lg:px-5 md:px-16 px-5 flex justify-center fullpage-overlay"
            data-anchor="page-5"
            id="page-5-anchor"
        >
            <div className="flex flex-col text-center mb-8 max-w-4xl">
                <h1 className="font-metapro lg:text-7xl md:text-6xl xs:text-5xl text-3xl font-bold lg:my-16 my-8">
                    Фотогалерея
                </h1>
            </div>

            <img
                src={firstScreenImg}
                alt=""
                className="absolute w-full h-full top-0 left-0 object-cover z-[-1] object-right-top"
            />
        </div>
    );
}