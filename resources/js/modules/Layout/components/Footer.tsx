import React, { memo } from 'react';
import {Link} from "react-router-dom";
import {CallRequestButton} from "@components/CallRequest/CallRequestButton.tsx";

export const Footer: React.FC<{className?: string}> = memo(({className}) => {


    return (
        <footer className={"lg:hidden flex w-full bg-app px-[50px] pb-5 sm:pt-10 pt-5 text-[#3b4256] flex-col text-center" + className}>
            <div className="mb-8 text-center">
                <Link to="/infrastructure" className="uppercase text-xs">Инфраструктура</Link>
            </div>

            <CallRequestButton filledButton={true} className="sm:px-12 sm:w-auto w-max">
                Оставить заявку
            </CallRequestButton>

            <div className="copyright text-center text-13 mt-4 whitespace-pre">
                <p>
                    © 2023 Бизнес-центр<br/>
                    Victory Park.
                    Все права защищены
                </p>
            </div>
        </footer>
    );
});