import { useContext, SyntheticEvent, FC } from "react";

import { Tabs, Tab, Stack } from '@mui/material';

import { SwiperSlidesTwo } from './following';

import { SwiperSlidesOne } from "./forMe";

import { UIContext } from "../../context/ui";

import { Transitions } from "./watch";

import { IforMe } from "../../interfaces";

interface Props {
    forMe: IforMe[];
}

export const Swipers: FC<Props> = ({ forMe }) => {
    const { tabsMenuOpen, toggleTabsMenu } = useContext(UIContext)

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
                        <Tab label="Siguiendo" {...a11yProps(1)} />
                        <Tab wrapped label="Para ti" {...a11yProps(0)} />
                    </Tabs>
                </Stack>
            </Stack>

            {/* Following */}
            <SwiperSlidesTwo />

            {/* for me */}
            <SwiperSlidesOne forMe={forMe} />

            {/* Transitions */}
            <Stack sx={{ ...iconInitial, top: 0 }} height={'7vh'} width={'100%'}>
                <Transitions />
            </Stack>
        </>
    )
}
