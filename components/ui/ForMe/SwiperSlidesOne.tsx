import { FC, useContext } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'

import { VideoScreen } from '.';

import { UIContext } from '../../../context/ui';

import { IforMe } from '../../../interfaces';

import { EntriesContext } from '../../../context/entries';

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";


export const SwiperSlidesOne = () => {
    const { tabsMenuOpen } = useContext(UIContext);

    const { list } = useContext(EntriesContext)

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
        <TabPanel value={tabsMenuOpen} index={1}>
            <Swiper
                direction={"vertical"}
                className="mySwiper"
                navigation={true}
                spaceBetween={0}
                loop={true}
            >

                {
                    list.map((data: IforMe, key) => (
                        <SwiperSlide key={key}>
                            <VideoScreen data={data} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </TabPanel>
    )
}
