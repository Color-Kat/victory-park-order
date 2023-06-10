import React, {ReactNode, useState} from 'react';
import {Logo} from "@UI/Elements/Logo/Logo";
import {Link, useLocation } from "react-router-dom";

import logo from "@assets/logo.png";
import {HiOutlineMenu, HiX} from "react-icons/hi";
import phone from "@assets/phone.png";
import {RedButton} from "@UI/Buttons";

interface MenuLinkProps {
    children: ReactNode;
    isActive: boolean;
    to?: string;
    href?: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({children, isActive, to, href}) => {
    return  (
        <li className={`text-lg tracking-wide cursor-pointer ${isActive ? 'text-app-accent' : ''}`}>
            {href && <a href={href}>{children}</a>}
            {to && <Link to={to}>{children}</Link>}
        </li>
    );
}

const Navigation = () => {
    const {hash, pathname} = useLocation ();
    console.log(pathname);

    return (
        <ul>
            <MenuLink isActive={hash == '#page-1'} href="/#page-1">Главная</MenuLink>
            <MenuLink isActive={hash == '#page-2' || hash == '#page-3'} href="/#page-2">Аренда офисов</MenuLink>
            <MenuLink isActive={hash == '#page-4'} href="/#page-4">Продажа офисов</MenuLink>
            <MenuLink isActive={hash == '#page-5'} href="/#page-4">Фотогалерея</MenuLink>
            <MenuLink isActive={hash == '#page-6' || hash == '#page-7'} href="/#page-5">Контакты</MenuLink>
        </ul>
    );
}

export const Header = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return (
        <header
            className="relative flex justify-center lg:items-center lg:w-[300px] w-full h-max lg:px-0 px-4 bg-white z-10 lg:border-r border-app"
        >

            <nav className="flex lg:flex-col lg:pt-8 lg:pb-0 pt-3 pb-3 justify-between items-center lg:h-screen w-full">

                {/* Open mobile menu button */}
                <button
                    onClick={() => setIsMobileMenuOpen(prev => !prev)}
                    className="absolute xs:relative lg:hidden text-3xl p-2 border bg-app text-app-accent h-max"
                >{
                    isMobileMenuOpen
                        ? <HiX/>
                        : <HiOutlineMenu/>
                }</button>

                {/* Logo block */}
                <div
                    className="flex flex-col items-center lg:pb-8 lg:border-b lg:ml-0 xs:ml-[13%] mx-auto xs:mx-0 border-gray-200">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-fit object-contain"
                    />

                    <p className="text-gray-400 mt-3 font-light" style={{fontSize: '13px'}}>
                        Современный комплекс класса B+
                    </p>
                </div>

                {/* Phone block */}
                <div className="hidden xs:flex items-center flex-col">
                    <div className="mb-3 flex gap-1.5 items-center">
                        <img className="h-4" src={phone} alt="phone"/>
                        <span className="sm:text-lg font-bold cursor-pointer">
                                +7 (495) 21-21-799
                            </span>
                    </div>

                    <RedButton filled={false}>
                        Заказать звонок
                    </RedButton>
                </div>

                {/* Navigation */}
                <div className="hidden lg:flex">
                    <Navigation />
                </div>

                {/* footer block */}
                <div className="hidden lg:flex bg-app px-[50px] pb-5 pt-10 text-[#3b4256] flex-col">
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

            {/*  Mobile menu  */}
            <nav
                className={`lg:hidden flex ${isMobileMenuOpen ? 'h-64' : 'h-0'} w-full absolute bottom-0 translate-y-full bg-white  transition-all overflow-hidden z-20 px-4`}
            >
                <Navigation />
            </nav>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen &&
                <div className="w-screen h-screen absolute top-0 left-0" onClick={() => setIsMobileMenuOpen(false)}/>
            }
        </header>
    );
};