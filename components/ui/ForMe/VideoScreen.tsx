import { FC } from 'react';

import { Box } from '@mui/material';

import { IWatch } from '../../../interfaces';

import { SvgAndTextLeft, SvgAndTextRight } from './';

interface Props {
    data: IWatch;
}

export const VideoScreen: FC<Props> = ({ data }) => {

    return (
        <>
            <Box display='flex' justifyContent={'space-between'}>
                {/* SvgAndTextLeft and text */}
                <Box position={'relative'} mr={0} width={'80%'}>
                    <SvgAndTextLeft data={data} />
                </Box>

                {/* SvgAndTextRight and text */}
                <Box position={'relative'} mr={0} width={'20%'}>
                    <SvgAndTextRight data={data} />
                </Box>
            </Box>

            {/* all videos */}
            <video height={'inherit'} width={'inherit'} autoPlay muted loop >
                <source src={data?.videos[0]} type='video/mp4'></source>
            </video>

        </>
    )
}
