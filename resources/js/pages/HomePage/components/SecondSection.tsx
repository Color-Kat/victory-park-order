import React from 'react';
import {RedButton} from "@UI/Buttons";
import firstScreenImg from "@assets/images/first-screen.jpg";


export const SecondSection: React.FC = ({}) => {


    return (
        <div
            className="relative section w-full h-full lg:px-5 md:px-16 px-5 flex items-center justify-center fullpage-overlay"
            data-anchor="page-2"
            id="page-2-anchor"
        >
            <div className="flex flex-col justify-between text-center mb-8 max-w-4xl">
                <h1 className="font-metapro lg:text-7xl md:text-6xl xs:text-5xl text-3xl font-bold lg:mb-16 mb-8">
                    Офисы на Минской улице
                </h1>

                <div className="text-lg">
                    <p>
                        Бизнес-центр Victory Park (ex. Минская Плаза) расположен рядом со станцией метро Минская в
                        Москве. На сайте бизнес-центра есть вся необходимая информация по свободным площадям.
                    </p>
                </div>
            </div>

            <RedButton filled={true}>Узнать больше</RedButton>

            <img
                src={firstScreenImg}
                alt=""
                className="absolute w-full h-full top-0 left-0 object-cover z-[-1] object-right-top"
            />
        </div>
    );
}