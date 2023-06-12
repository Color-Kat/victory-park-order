import React, {useState} from 'react';

import {Navigation, Pagination, Scrollbar, A11y, FreeMode} from 'swiper';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import leftArrow from "@assets/icons/l-arrow.png";
import rightArrow from "@assets/icons/r-arrow.png";

interface GalleryProps {
    photos: string[];
    className?: string;
}

export const Gallery: React.FC<GalleryProps> = ({photos, className}) => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
    const slidesCount = photos.length;

    return (
        <>
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
                    const slideIndex = swiper.realIndex >= 0 ? swiper.realIndex : -1;
                    setCurrentSlideIndex(slideIndex+1);
                }}
                loop={true}
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                className={className}
            >
                {photos.map(photo => (
                    <SwiperSlide
                        key={photo}
                        className=""
                    >
                        <img
                            src={photo}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}

                <div className="absolute left-0 bottom-10 w-full justify-center flex items-center gap-8 z-10 text-white">
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
            </Swiper>
        </>
    );
}