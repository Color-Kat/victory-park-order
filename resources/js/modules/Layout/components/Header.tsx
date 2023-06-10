import React, {ReactNode, useEffect, useState} from 'react';
import {Logo} from "@UI/Elements/Logo/Logo";
import {Link, NavLink, useLocation} from "react-router-dom";

import logo from "@assets/logo.png";
import {HiOutlineMenu, HiX} from "react-icons/hi";
import phone from "@assets/phone.png";
import {RedButton} from "@UI/Buttons";
import {CallRequest} from "@components/CallRequest/CallRequest";
import {isMobile} from "@/utils/isMobile.ts";

interface MenuLinkProps {
    children: ReactNode;
    isActive: boolean;
    to?: string;
    href?: string;
    isMobile: boolean
}

const MenuLink: React.FC<MenuLinkProps> = ({children, isActive, to, href, isMobile}) => {
    return (
        <li className={`text-lg tracking-wide cursor-pointer menu-item ${isActive ? 'text-app-accent active-menu-item' : ''}`}>
            {href && <a
                href={isMobile ? href + '-anchor' : href} // Add -anchor for mobile links to scroll to element not by fullpage.js but by native html
            >{children}</a>}
            {to && <Link to={to}>{children}</Link>}
        </li>
    );
}

const Navigation = ({isMobile = false}: { isMobile?: boolean }) => {
    const {hash, pathname} = useLocation();

    return (
        <ul className="space-y-5">
            <MenuLink isMobile={isMobile} isActive={hash == '#page-1'} href="/#page-1">Главная</MenuLink>
            <MenuLink isMobile={isMobile} isActive={hash == '#page-2' || hash == '#page-3'} href="/#page-2">Аренда
                офисов</MenuLink>
            <MenuLink isMobile={isMobile} isActive={hash == '#page-4'} href="/#page-4">Продажа офисов</MenuLink>
            <MenuLink isMobile={isMobile} isActive={hash == '#page-5'} href="/#page-5">Фотогалерея</MenuLink>
            <MenuLink isMobile={isMobile} isActive={hash == '#page-6' || hash == '#page-7'}
                      href="/#page-6">Контакты</MenuLink>
            <MenuLink isMobile={isMobile} isActive={pathname == '/about'} to="/about">О бизнес-центре</MenuLink>
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
                    className="absolute xs:relative lg:hidden text-3xl p-2 border bg-app text-app-accent h-max rounded"
                >{
                    isMobileMenuOpen
                        ? <HiX/>
                        : <HiOutlineMenu/>
                }</button>

                {/* Logo block */}
                <div
                    className="lg:pb-8 lg:border-b lg:ml-0 xs:ml-[13%] mx-auto xs:mx-0 border-gray-200"
                >
                    <a href="/" className="flex flex-col items-center ">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-fit object-contain"
                        />

                        <p className="text-gray-400 mt-3 font-light" style={{fontSize: '13px'}}>
                            Современный комплекс класса B+
                        </p>
                    </a>

                </div>
                {/* Phone block */}
                <div className="hidden xs:flex items-center flex-col">
                    <div className="mb-3 flex gap-1.5 items-center">
                        <img className="h-4" src={phone} alt="phone"/>
                        <a className="sm:text-lg font-bold cursor-pointer" href="tel:+74952121799">
                            +7 (495) 21-21-799
                        </a>
                    </div>

                    <CallRequest filledButton={false}>
                        Заказать звонок
                    </CallRequest>
                </div>

                {/* Navigation */}
                <div className="hidden lg:flex w-full px-[50px]">
                    <Navigation/>
                </div>

                {/* footer block */}
                <div className="hidden lg:flex bg-app px-[50px] pb-5 pt-10 text-[#3b4256] flex-col">
                    <Link to="/infrastructure" className="mb-9 uppercase text-xs cursor-pointer">Инфраструктура</Link>

                    <CallRequest filledButton={true}>
                        Оставить заявку
                    </CallRequest>

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
                className={`lg:hidden flex ${isMobileMenuOpen ? 'h-72' : 'h-0'} w-full absolute bottom-0 translate-y-full bg-white  transition-all overflow-hidden z-20 px-4`}
                onClick={() => setIsMobileMenuOpen(false)}
                id="mobile-menu"
            >
                <Navigation isMobile={true}/>
            </nav>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen &&
                <div className="w-screen h-screen absolute top-0 left-0" onClick={() => setIsMobileMenuOpen(false)}/>
            }
        </header>
    );
};