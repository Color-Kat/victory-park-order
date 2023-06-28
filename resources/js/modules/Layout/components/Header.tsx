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
            <MenuLink isMobile={isMobile} isActive={hash == '#page-5'} href="/#page-5">Фотогалерея</MenuLink>
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

                        <svg width="240" height="30" viewBox="0 0 391 30" fill="black" xmlns="http://www.w3.org/2000/svg">

                            <path fill-rule="evenodd" clip-rule="evenodd" d="M131.588 19.4478C131.94 18.6863 132.32 17.8641 132.727 16.9965L138.732 4L148.05 23.8171H145.462L140.596 13.3996L140.699 13.196L140.458 13.0942L137.766 7.29154L134.729 13.8746C133.728 16.0464 132.313 19.1682 131.416 21.5096L130.312 23.8511H129.449C129.97 22.9483 130.687 21.3964 131.588 19.4478ZM45.4157 23.8175H43V4.27186H58.9094V23.8175H56.4936V4.713H45.4157V23.8175ZM98.7002 13.5691C101.703 13.0601 103.221 11.1259 103.221 8.78453C103.221 6.17166 101.565 4.16959 97.1127 4.16959C95.4997 4.16959 93.833 4.22237 92.7043 4.25811L92.2812 4.27139V23.7492C93.4546 23.817 95.5597 23.851 96.7676 23.851C101.703 23.851 104.394 21.9846 104.394 18.252C104.394 15.4355 102.22 13.8067 98.7002 13.5691ZM94.697 4.67859C95.1801 4.61072 95.6288 4.61072 96.388 4.61072C98.9073 4.61072 100.667 6.30739 100.667 9.2596C100.667 12.2457 99.0108 13.5013 96.4915 13.5013H94.697V4.67859ZM96.9402 23.4777C95.9048 23.4777 95.3527 23.4098 94.697 23.308V13.9085H96.457C99.563 13.9085 101.841 15.1979 101.841 18.6592C101.841 22.1204 99.7355 23.4777 96.9402 23.4777ZM115.61 13.8743V23.4096V23.4435H117.543C119.443 23.4435 120.775 23.4321 121.895 23.4225C122.708 23.4156 123.409 23.4096 124.134 23.4096V23.8507H113.194V4.30508H124.134L124.169 4.74622C123.386 4.74622 122.67 4.74023 121.84 4.73329C120.693 4.7237 119.328 4.71228 117.267 4.71228H115.61V13.4332H117.715H122.719V13.8064C122.251 13.8064 121.493 13.8203 120.663 13.8355L120.663 13.8355H120.663C119.658 13.8539 118.547 13.8743 117.715 13.8743H115.61ZM157.92 23.4096V13.8743H160.025C160.857 13.8743 161.968 13.8539 162.973 13.8355C163.803 13.8203 164.561 13.8064 165.029 13.8064V13.4332H160.025H157.92V4.71228H159.577C161.638 4.71228 163.004 4.7237 164.15 4.73329C164.98 4.74023 165.696 4.74622 166.479 4.74622L166.444 4.30508H155.504V23.8507H166.444V23.4096C165.719 23.4096 165.018 23.4156 164.205 23.4225C163.085 23.4321 161.753 23.4435 159.853 23.4435H157.92V23.4096ZM69.0208 16.9965L75.0946 4H75.7158L84.9992 23.8511H82.4109L79.2359 16.9965H69.6075C69.5557 17.1322 69.504 17.2593 69.4523 17.3865L69.4522 17.3867L69.4521 17.387C69.4003 17.5141 69.3486 17.6413 69.2969 17.777L66.5015 23.8511H65.5697L65.5698 23.851L65.5698 23.8509C66.2255 22.5953 67.5369 20.0843 69.0208 16.9965ZM70.4357 15.198C70.2287 15.6476 70.0216 16.0973 69.8145 16.5554H79.0288L74.4044 6.57894L71.0569 13.8407C70.8499 14.2986 70.6429 14.7481 70.4359 15.1975L70.4359 15.1976L70.4357 15.198ZM201.576 23.8175H203.992V4.27186H201.576V23.8175ZM365.639 8.75068C365.639 10.7188 364.431 12.7548 361.36 13.6371C365.053 14.2479 366.399 16.3857 366.433 18.5574C366.433 22.1544 363.154 24.1225 359.151 24.1225C356.252 24.1225 354.216 23.342 352.974 22.4258L353.353 21.7811C355.666 23.5117 356.459 23.6814 358.806 23.6814C361.809 23.6814 363.81 21.9847 363.81 18.7271C363.81 15.6052 361.429 14.0782 358.944 14.0782H358.634C357.529 14.0782 356.977 14.214 356.977 14.214V13.5353C356.977 13.5353 357.874 13.6371 358.806 13.6371H359.048C361.74 13.6371 363.12 12.178 363.12 9.09001C363.12 6.20567 361.325 4.23753 358.806 4.4072C356.839 4.57687 356.701 4.64474 354.147 6.20567L353.94 5.79847C355.528 4.67867 357.288 4 359.462 4C363.12 4 365.639 5.76454 365.639 8.75068ZM190.636 4.27186H188.221V23.4103H177.557V4.27186H175.141V23.8175H192.879V25.4803C192.879 27.3805 191.982 28.3307 190.084 28.3307C188.35 28.3307 186.501 27.6511 184.774 27.0161C184.61 26.956 184.448 26.8963 184.286 26.8376C184.032 26.7456 183.766 26.6453 183.491 26.541C181.935 25.9528 180.058 25.2427 178.005 25.2427C175.659 25.2427 173.726 27.0073 173.726 29.5183V29.9255H174.106V29.4505C174.106 27.8895 175.072 26.8376 176.798 26.8376C178.761 26.8376 179.974 27.3101 182.117 28.1448L182.467 28.2809L182.595 28.3307C184.597 29.0772 186.875 29.9255 188.876 29.9255C192.017 29.9255 193.328 28.1949 193.328 25.4463V23.3424H190.636V4.27186ZM305.177 23.8511C305.901 22.5955 307.247 20.0844 308.697 16.9965L314.702 4L324.089 23.8511H321.5L313.77 7.29154L310.733 13.8746C309.939 15.6052 308.904 17.9466 308.11 19.9826L306.316 23.8511H305.177ZM381.031 4H380.41L374.336 16.9965C372.852 20.0844 371.541 22.5955 370.885 23.8511H371.92L373.749 19.8469C374.095 18.9307 374.474 17.9806 374.888 17.0304H384.517L387.692 23.885H390.28L381.031 4ZM375.13 16.5554C375.337 16.0973 375.544 15.6476 375.751 15.198C375.958 14.7484 376.165 14.2988 376.372 13.8407L379.72 6.54501L384.379 16.5554H375.13ZM332.267 16.9965L338.341 4H338.963L348.211 23.8511H345.623L342.448 16.9965H332.82C332.396 18.0174 331.934 19.014 331.483 19.9888C330.87 21.3143 330.275 22.5996 329.817 23.8511H328.816C329.472 22.5955 330.784 20.0844 332.267 16.9965ZM333.682 15.1992C333.475 15.6484 333.268 16.0977 333.061 16.5554H342.276L337.651 6.54501L334.304 13.8407C334.097 14.2988 333.889 14.7485 333.682 15.1981L333.682 15.1992ZM282.848 23.8175H285.264V4.713H296.342V23.8175H298.723V4.27186H282.848V23.8175ZM215.829 4.30508C215.829 4.30508 212.205 7.22336 209.341 10.0738L206.649 12.7206L216.588 23.8168H213.482L204.786 14.044L214.69 4.30508H215.829ZM231.324 4L225.25 16.9965C223.767 20.0844 222.455 22.5955 221.799 23.8511H222.731L225.389 18.0484C225.527 17.7091 225.665 17.3698 225.837 17.0304H235.466L238.641 23.885H241.229L231.98 4H231.324ZM226.663 15.2027L226.665 15.198L226.668 15.1935C226.874 14.7454 227.08 14.2972 227.287 13.8407L230.634 6.54501L235.293 16.5554H226.044C226.251 16.0989 226.457 15.6508 226.663 15.2027ZM253.445 14.9945C251.168 14.3498 249.201 12.6531 249.201 9.87056C249.201 6.64689 251.823 4.20368 256.586 4.20368C257.138 4.20368 260.209 4.23761 261.314 4.27155V23.8172H258.898V15.3678H255.723L250.167 23.8172H247.303L253.445 14.9945ZM258.933 14.9606V4.74661C258.173 4.67875 257.587 4.64481 256.827 4.64481C253.48 4.64481 251.789 6.74869 251.789 9.97236C251.789 12.9924 253.791 14.9606 256.862 14.9606H258.933Z"></path>
                            <path d="M0 14.5C0 22.5083 6.49179 29 14.4998 29C22.5081 29 29 22.5083 29 14.5C29 6.49189 22.5081 0.000128442 14.4998 0.000128442C6.49179 0.000128442 0 6.49189 0 14.5" fill="black"></path>
                            <path d="M26.4086 14.3355L26.3339 14.2656C26.3339 14.2656 24.8023 15.9835 19.8478 13.1923C16.5348 11.326 13.5953 9.41282 9.90902 8.88202C7.78449 8.57629 5.329 8.73141 4.16963 11.1393C2.95642 13.659 5.0095 15.8988 5.0095 15.8988L5.14949 15.8055C5.14949 15.8055 3.74011 13.7688 5.3362 12.3058C6.36821 11.3596 7.77075 11.2432 9.30456 11.4875V19.9824H11.6821V12.0692C11.8843 12.1311 12.0867 12.1941 12.2887 12.2591C13.7516 12.7294 15.5362 13.6673 17.4215 14.4676V19.9824H19.7991V15.3448C20.5179 15.5616 21.2377 15.7276 21.9477 15.8055C24.9751 16.1372 26.117 14.6594 26.4086 14.3355" fill="white"></path>
                        </svg>

                        <p className="text-gray-400 mt-3 font-light" style={{fontSize: '13px'}}>
                            Офисный центр класса A
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