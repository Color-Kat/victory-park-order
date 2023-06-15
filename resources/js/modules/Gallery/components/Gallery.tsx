import React, {useEffect, useState} from 'react';

import {Navigation, Swiper as SwiperType} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import leftArrow from "@assets/icons/l-arrow.png";
import rightArrow from "@assets/icons/r-arrow.png";

interface GalleryProps {
    photos: string[];
    className?: string;
}

export const Gallery: React.FC<GalleryProps> = ({photos, className}) => {
    const swiperRef = React.useRef<SwiperType>();

    const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
    const slidesCount = photos.length;

    return (
        <>
            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onAfterInit={(swiper) => {
                    setTimeout(() => {
                        swiper.slideTo(1, 200);
                    }, 500);
                }}
                onRealIndexChange={(swiper) => {
                    const slideIndex = swiper.realIndex >= 0 ? swiper.realIndex : -1;
                    setCurrentSlideIndex((slideIndex+1) ?? 0);
                }}
                loop={true}
                modules={[Navigation]}
                slidesPerView={1}
                className={className + ' will-change-transform'}
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
                    <div onClick={() => swiperRef.current?.slidePrev()} className="cursor-pointer">
                        <img src={leftArrow} alt=""/>
                    </div>

                    <div className="">
                        {currentSlideIndex}
                        <span className="mx-2">/</span>
                        {slidesCount}
                    </div>

                    <div onClick={() => swiperRef.current?.slideNext()} className="cursor-pointer">
                        <img src={rightArrow} alt=""/>
                    </div>
                </div>
            </Swiper>
        </>
    );
}