import { FC } from 'react';

import { Box, Stack, Typography } from '@mui/material';

import Brightness1Icon from '@mui/icons-material/Brightness1';

import TurnedInIcon from '@mui/icons-material/TurnedIn';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import Avatar from '@mui/material/Avatar';

import AvatarGroup from '@mui/material/AvatarGroup';

import { SvgLove, SvgMessage, SvgRedirect } from '../../../utils';

import { IWatch } from '../../../interfaces';

interface Props {
    data: IWatch;
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
            <Stack position={'absolute'} height={'100vh'} width={'100%'} style={{ backgroundColor: '#000' }}>
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
