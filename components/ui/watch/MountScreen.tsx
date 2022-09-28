import { FC } from 'react';

import { Box } from '@mui/material';

import Webcam from 'react-webcam';

import { IforMe } from '../../../interfaces';

import { SvgAndTextRight, SvgAndTextLeft } from './';

interface Props {
    data: IforMe;
}

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

export const MountScreen: FC<Props> = ({ data }) => {

    return (
        <>
            <Box display='flex' position={'relative'} justifyContent={'space-between'}>
                <Box position={'fixed'}>
                    <Webcam videoConstraints={videoConstraints} />
                </Box>

                {/* SvgAndTextLeft and text */}
                <Box position={'inherit'} mr={0} width={'80%'}>
                    <SvgAndTextLeft data={data} />
                </Box>

                {/* SvgAndTextRight and text */}
                <Box position={'inherit'} mr={0} width={'20%'}>
                    <SvgAndTextRight data={data} />
                </Box>
            </Box>

        </>
    )
}
