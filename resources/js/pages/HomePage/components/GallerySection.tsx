import React, {useCallback, useRef, useState} from 'react';
import firstScreenImg from "@assets/images/first-screen.jpg";

import {Navigation, Pagination, Scrollbar, A11y, FreeMode} from 'swiper';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import leftArrow from "@assets/icons/l-arrow.png";
import rightArrow from "@assets/icons/r-arrow.png";

export const GallerySection: React.FC = ({}) => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
    const [slidesCount, setSlidesCount] = useState(3);

    return (
        <div
            className="relative section w-full h-full lg:px-5 flex flex-col justify-start md:px-16 px-5 fullpage-overlay z-0"
            data-anchor="page-5"
            id="page-5-anchor"
        >
            <div className="lg:my-16 my-8">
                <h2 className="font-metapro lg:text-6xl md:text-6xl xs:text-5xl text-3xl font-bold text-center ">
                    Фотогалерея
                </h2>
            </div>

            {/*<div>*/}
            <Swiper
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onRealIndexChange={(swiper) => {
                    setCurrentSlideIndex(swiper.realIndex+1);
                }}
                loop={true}
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                // scrollbar={{draggable: true}}
                className="w-full h-full absolute top-0 left-0 z-[-1]"
            >
                {Array.from(Array(10).keys()).map(i => (
                    <SwiperSlide
                        key={i}
                        className=""
                    >
                        <img
                            src={`/storage/gallery/${i}.jpg`}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-10 w-full justify-center flex items-center gap-8">
                <div ref={navigationPrevRef} className="cursor-pointer">
                    <img src={leftArrow} alt=""/>
                </div>

                <div className="">
                    {currentSlideIndex}
                    <span className="mx-2">/</span>
                    {slidesCount}
                </div>

                <div ref={navigationNextRef} className="cursor-pointer">
                    <img src={rightArrow} alt=""/>
                </div>
            </div>
        </div>
    );
}