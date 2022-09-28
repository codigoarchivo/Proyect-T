import { FC, useContext } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'

import { VideoScreen } from '.';

import { UIContext } from '../../../context/ui';

import { IforMe } from '../../../interfaces';


// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

interface Props {
    forMe: IforMe[];
}

export const SwiperSlidesOne: FC<Props> = ({ forMe }) => {
    const { tabsMenuOpen } = useContext(UIContext);

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
                    forMe.map((data: IforMe, key) => (
                        <SwiperSlide key={key}>
                            <VideoScreen data={data} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </TabPanel>
    )
}
