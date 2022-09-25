import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { VideoScreen, Nabvar } from './';

import { initialData } from '../../database';

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

export const Swipers = () => {
    return (
        <>
            <Swiper
                direction={"vertical"}
                className="mySwiper"
            >

                {
                    initialData.user.map((data, key) => (
                        <SwiperSlide key={key}>
                            <VideoScreen data={data} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Nabvar />
        </>
    )
}
