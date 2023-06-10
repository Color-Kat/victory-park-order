import React from 'react';
import firstScreenImg from "@assets/images/first-screen.jpg";

import {Navigation, Pagination, Scrollbar, A11y, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const GallerySection: React.FC = ({}) => {
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
                modules={[Navigation, Pagination]}
                // spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{draggable: true}}
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
            {/*</div>*/}
        </div>
    );
}