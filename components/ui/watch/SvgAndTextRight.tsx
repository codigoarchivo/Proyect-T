import { FC } from 'react';

import { Stack, Typography } from '@mui/material';

import { SvgLove, SvgMessage } from '../../../utils';

import { IforMe } from '../../../interfaces';

interface Props {
    data: IforMe;
}

export const SvgAndTextRight: FC<Props> = ({ data }) => {

    const iconInitial = {
        position: 'absolute',
        zIndex: 1,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    };

    const space = {
        width: 50,
        height: 50,
        fontWeight: 'bold'
    };

    return (
        <>
            <Stack position={'absolute'} height={'100vh'} width={'100%'} >
                <Stack alignItems={'center'} sx={{ ...iconInitial, ...space, top: '10%' }}>
                    <SvgLove fontSize='large' />
                    <Typography>
                        Girar
                    </Typography>
                </Stack>

                <Stack alignItems={'center'} sx={{ ...iconInitial, ...space, top: '20%' }}>
                    <SvgMessage fontSize='large' />
                    <Typography>
                        Velocidad
                    </Typography>
                </Stack>
                <Stack alignItems={'center'} sx={{ ...iconInitial, ...space, top: '30%' }}>
                    <SvgMessage fontSize='large' />
                    <Typography>
                        Filtros
                    </Typography>
                </Stack>
                <Stack alignItems={'center'} sx={{ ...iconInitial, ...space, top: '40%' }}>
                    <SvgMessage fontSize='large' />
                    <Typography>
                        Filtros
                    </Typography>
                </Stack>

            </Stack>

        </>

    )
}
