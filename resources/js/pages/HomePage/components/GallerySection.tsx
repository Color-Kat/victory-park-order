import React from 'react';
import {Gallery} from "@modules/Gallery";
import {useGetGalleryPhotosQuery, useGetRentOfficesQuery, useGetSellOfficesQuery} from "@/store/offices/offices.api.ts";

export const GallerySection: React.FC = ({}) => {

    const {data: photos = []} = useGetGalleryPhotosQuery();

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

            <Gallery
                photos={photos}
                className="w-full h-full absolute top-0 left-0 z-[-1]"
            />

        </div>
    );
}