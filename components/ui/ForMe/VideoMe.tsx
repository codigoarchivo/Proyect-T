import { Swiper, SwiperSlide } from 'swiper/react'

import { VideoScreen } from './';

import { initialData } from '../../../database'

export const VideoMe = () => {
    return (
        <Swiper
            direction={"vertical"}
            className="mySwiper"
            navigation={true}
            spaceBetween={0}
            loop={true}
        >

            {
                initialData.user.map((data, key) => (
                    <SwiperSlide key={key}>
                        <VideoScreen data={data} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
