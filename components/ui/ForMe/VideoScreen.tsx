import { FC } from 'react';

import { Box } from '@mui/material';

import { IWatch } from '../../../interfaces';

import { SvgAllIcon, MarqueeAll } from './';

interface Props {
    data: IWatch;
}

export const VideoScreen: FC<Props> = ({ data }) => {

    return (
        <>
            <Box display='flex' justifyContent={'space-between'}>
                {/* MarqueeAll and text */}
                <Box position={'relative'} mr={0} width={'80%'}>
                    <MarqueeAll data={data} />
                </Box>

                {/* all icons */}
                <Box position={'relative'} mr={0} width={'20%'}>
                    <SvgAllIcon data={data} />
                </Box>
            </Box>

            {/* all videos */}
            <video height={'inherit'} width={'inherit'} autoPlay muted loop >
                <source src={data?.videos[0]} type='video/mp4'></source>
            </video>
           
        </>
    )
}
