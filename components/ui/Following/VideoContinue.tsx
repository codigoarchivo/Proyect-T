import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper";

import { VideoScreenTwo } from "./VideoScreenTwo";

import { initialData } from "../../../database";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const swi = {
    width: '100%',
    paddingTop: '100px',
    paddingBottom: '50px',
}

const sli = {
    padding: '1rem'
}

export const VideoContinue = () => {
    return (
        <>
            <Swiper
                style={{ ...swi }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                navigation={true}
                spaceBetween={30}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    initialData.user.map((data, key) => (
                        <SwiperSlide key={key} style={{ ...sli }}>
                            <VideoScreenTwo data={data} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}
