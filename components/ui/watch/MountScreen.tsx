import { FC } from 'react';

import { Box } from '@mui/material';

import { IWatch } from '../../../interfaces';

import { SvgAndTextRight, SvgAndTextLeft } from './';

interface Props {
    data: IWatch;
}

export const MountScreen: FC<Props> = ({ data }) => {

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

        </>
    )
}
