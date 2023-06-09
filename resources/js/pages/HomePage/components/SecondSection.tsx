import React from 'react';
import {RedButton} from "@UI/Buttons";
import secondScreenImg from "@assets/images/second-screen.jpg";
import {Link} from "react-router-dom";


export const SecondSection: React.FC = ({}) => {
    return (
        <div
            className="relative section w-full h-full lg:px-5 md:px-16 px-5 flex items-center justify-center fullpage-overlay"
            data-anchor="page-2"
            id="page-2-anchor"
        >
            <div className="flex flex-col justify-between text-center mb-8 max-w-4xl">
                <h1 className="font-metapro lg:text-7xl md:text-6xl xs:text-5xl text-3xl font-bold lg:mb-16 mb-8">
                    {(import.meta as any).env.VITE_TITLE_2}
                </h1>

                <div className="text-lg shadow-3xl bg-black/20 rounded-xl backdrop-blur-sm p-3 ">
                    <p>
                        {(import.meta as any).env.VITE_SUBTITLE_2}
                    </p>
                </div>
            </div>

            <Link to="/about">
                <RedButton filled={true}>Узнать больше</RedButton>
            </Link>

            <img
                src={secondScreenImg}
                alt=""
                className="absolute w-full h-full top-0 left-0 object-cover z-[-1] object-bottom"
            />
        </div>
    );
}