import { useContext, SyntheticEvent } from "react";

import { Tabs, Tab, Stack } from '@mui/material';

import { VideoContinue } from './following';

import { VideoMe } from "./forMe";

import { UIContext } from "../../context/ui";

import { Transitions } from "./watch";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

export const Swipers = () => {
    const { tabsMenuOpen, toggleTabsMenu } = useContext(UIContext)

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }


    const TabPanel = (props: TabPanelProps) => {
        const { children, value, index, ...other } = props;

        return (
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
        );
    }

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        toggleTabsMenu(newValue);
    };

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const iconInitial = {
        position: 'absolute',
        zIndex: 20,
    };

    return (
        <>
            {/* select Following and for me */}
            <Stack sx={{ ...iconInitial, top: '3%' }} height={'7vh'} width={'100%'}>
                <Stack spacing={0} flexDirection={'row'} justifyContent={'center'} >
                    <Tabs value={tabsMenuOpen} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Siguiendo" {...a11yProps(0)} />
                        <Tab label="Para ti" {...a11yProps(1)} />
                    </Tabs>
                </Stack>
            </Stack>

            {/* Following */}
            <TabPanel value={tabsMenuOpen} index={0}>
                <VideoContinue />
            </TabPanel>

            {/* for me */}
            <TabPanel value={tabsMenuOpen} index={1}>
                <VideoMe />
            </TabPanel>

            {/* Transitions */}
            <Stack sx={{ ...iconInitial, top: 0 }} height={'7vh'} width={'100%'}>
                <Transitions />
            </Stack>
        </>
    )
}
