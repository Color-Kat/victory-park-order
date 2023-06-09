import {memo} from "react";

import {Header} from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import logo from "@assets/logo.png";
import phone from "@assets/phone.png";
import {RedButton} from "@UI/Buttons";

export const Layout: React.FC<{ children: React.ReactElement }> = memo(({children}) => {
    return (
        <div
            className="scroll-container flex flex-col h-screen overflow-auto overflow-x-hidden font-circle bg-gray-200"
        >

            <header className="flex justify-center items-center w-[300px] bg-white">

                <nav className="flex flex-col pt-8 justify-between h-screen w-full">
                    <div className="flex flex-col items-center pb-8 border-b border-gray-200">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-fit object-contain"
                        />

                        <p className="text-gray-400 mt-3 font-light" style={{fontSize: '13px'}}>
                            Современный комплекс класса B+
                        </p>
                    </div>

                    <div className="flex items-center flex-col">
                        <div className="mb-3 flex gap-1.5 items-center">
                            <img className="h-4" src={phone} alt="phone"/>
                            <span className="text-lg font-bold cursor-pointer">
                                +7 (495) 21-21-799
                            </span>
                        </div>

                        <RedButton filled={false} >
                            Заказать звонок
                        </RedButton>
                    </div>

                    <div className="">

                    </div>

                    <div className="bg-app px-[50px] pb-5 pt-10 text-[#3b4256] flex flex-col">
                        <a href="" className="mb-9 uppercase text-xs">Инфраструктура</a>

                        <RedButton filled={true}>
                            Оставить заявку
                        </RedButton>

                        <div className="copyright text-center text-13 mt-14">
                            <span>
                                © 2023 Бизнес-центр<br/>
                                Victory Park.<br/>
                                Все права защищены
                            </span>
                        </div>
                    </div>
                </nav>

                <main className="bg-gray-300"></main>
            </header>

            {/*<Header/>*/}

            {/*<Main>*/}
            {/*    <div className="max-w-4xl flex-1">*/}
            {/*        {children}*/}
            {/*    </div>*/}
            {/*</Main>*/}

            {/*<Footer/>*/}

        </div>
    );
});