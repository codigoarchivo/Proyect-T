import { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper";

import { VideoScreenTwo } from "./";

import { seeDatabase } from "../../../database";

import { UIContext } from "../../../context/ui";

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



export const SwiperSlidesTwo = () => {
    const { tabsMenuOpen } = useContext(UIContext)

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    const TabPanel = (props: TabPanelProps) => {
        const { children, value, index, ...other } = props;

        return (
            <>
                <div
                    role="tabpanel"
                    hidden={value !== index}
                    id={`simple-tabpanel-${index}`}
                    aria-labelledby={`simple-tab-${index}`}
                    {...other}
                >
                    {value === index && (
                        <>
                            {children}
                        </>
                    )}
                </div>
            </>
        );
    }

    return (
        <>
            <TabPanel value={tabsMenuOpen} index={0}>
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
                        seeDatabase.initialData.dataFoll.map((data, key) => (
                            <SwiperSlide key={key} style={{ ...sli }}>
                                <VideoScreenTwo data={data} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </TabPanel>
        </>
    )
}
