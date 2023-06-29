import React, {ReactNode, useState} from 'react';
import {Link, useLocation} from "react-router-dom";

import logo from "@assets/logo.png";
import {HiOutlineMenu, HiX} from "react-icons/hi";
import {CallRequestButton} from "@components/CallRequest/CallRequestButton.tsx";
import {useSettings} from "@hooks/useSettings.ts";
import {PhoneNumber} from "@UI/Elements/PhoneNumber.tsx";

interface MenuLinkProps {
    children: ReactNode;
    isActive: boolean;
    to?: string;
    href?: string;
    isMobile: boolean
}

const MenuLink: React.FC<MenuLinkProps> = ({children, isActive, to, href, isMobile}) => {
    const {pathname} = useLocation();

    // Because only by a tag we can use anchor navigation,
    // we have page reloading when click to Home page.
    // But from not Home page we don't need this, so change a tag to link
    if(pathname != '/' && !to) {
        to = href;
        href = '';
    }

    return (
        <li className={`text-lg tracking-wide cursor-pointer menu-item ${isActive ? 'text-app-accent active-menu-item' : ''}`}>
            {href &&
                <a
                    href={isMobile ? href + '-anchor' : href} // Add -anchor for mobile links to scroll to element not by fullpage.js but by native html
                >{children}</a>
            }

            {to &&
                <Link to={to}>{children}</Link>
            }
        </li>
    );
}

const Navigation = ({isMobile = false}: { isMobile?: boolean }) => {
    const {hash, pathname} = useLocation();
    const {is_rent_active, is_sell_active} = useSettings(); // Get settings

    return (
        <ul className="space-y-5">
            <MenuLink isMobile={isMobile} isActive={hash == '#page-1' || hash == '#page-2'  || (isMobile && pathname == '/')} href="/#page-1">Главная</MenuLink>
            {is_rent_active && <MenuLink isMobile={isMobile} isActive={hash == '#page-3'} href="/#page-3">Аренда офисов</MenuLink>}
            {is_sell_active && <MenuLink isMobile={isMobile} isActive={hash == '#page-4'} href="/#page-4">Продажа офисов</MenuLink>}
            {/*<MenuLink isMobile={isMobile} isActive={hash == '#page-5'} href="/#page-5">Фотогалерея</MenuLink>*/}
            <MenuLink isMobile={isMobile} isActive={hash == '#page-6' || hash == '#page-7'} href="/#page-6">Контакты</MenuLink>
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
                        {/*<img*/}
                        {/*    src={logo}*/}
                        {/*    alt="logo"*/}
                        {/*    className="w-fit object-contain"*/}
                        {/*/>*/}

                        <h1 className="text-neutral-800 font-serif text-center leading-3 tracking-tight md:text-5xl text-3xl">
                            <span className="block md:text-3xl text-xl md:tracking-widest tracking-wide">Golden</span>
                            <span className="md:tracking-widest tracking-wide">Ring</span>
                        </h1>

                        <p className="text-gray-500 mt-3 font-light" style={{fontSize: '13px'}}>
                            Офисный центр класса B+
                        </p>
                    </a>

                </div>

                {/* Phone block */}
                <div className="hidden xs:flex items-center flex-col">
                    <PhoneNumber className="mb-3"/>

                    <CallRequestButton filledButton={false}>
                        Заказать звонок
                    </CallRequestButton>
                </div>

                {/* Navigation */}
                <div className="hidden lg:flex w-full px-[50px]">
                    <Navigation/>
                </div>

                {/* footer block */}
                <div className="hidden lg:flex bg-app px-[50px] pb-5 pt-10 text-[#3b4256] flex-col">
                    <Link to="/infrastructure" className="mb-9 uppercase text-xs cursor-pointer">Инфраструктура</Link>

                    <CallRequestButton filledButton={true}>
                        Оставить заявку
                    </CallRequestButton>

                    <div className="copyright text-center text-13 mt-14">
                        <span>
                            © 2023 Бизнес-центр<br/>
                            {(import.meta as any).env.VITE_BC_NAME}.<br/>
                            Все права защищены
                        </span>
                    </div>
                </div>
            </nav>

            {/*  Mobile menu  */}
            <nav
                className={`lg:hidden flex ${isMobileMenuOpen ? 'h-96 xs:h-72' : 'h-0'} flex-col w-full absolute bottom-0 translate-y-full bg-white  transition-all overflow-hidden z-20 px-4`}
                onClick={() => setIsMobileMenuOpen(false)}
                id="mobile-menu"
            >
                <Navigation isMobile={true}/>

                <div className="flex xs:hidden flex-wrap items-center mt-8 gap-3 justify-between">
                    <PhoneNumber className=""/>

                    <CallRequestButton filledButton={false} className="mr-0">
                        Заказать звонок
                    </CallRequestButton>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen &&
                <div className="w-screen h-screen absolute top-0 left-0" onClick={() => setIsMobileMenuOpen(false)}/>
            }
        </header>
    );
};