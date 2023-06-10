import React, { memo } from 'react';
import {Link} from "react-router-dom";
import {CallRequest} from "@components/CallRequest/CallRequest.tsx";

export const Footer: React.FC<{className?: string}> = memo(({className}) => {


    return (
        <footer className={"lg:hidden flex w-full bg-app px-[50px] pb-5 pt-10 text-[#3b4256] flex-col text-center" + className}>
            <div className="mb-8 text-center">
                <Link to="/infrastructure" className="uppercase text-xs">Инфраструктура</Link>
            </div>

            <CallRequest filledButton={true} className="sm:px-12 sm:w-auto w-max">
                Оставить заявку
            </CallRequest>

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