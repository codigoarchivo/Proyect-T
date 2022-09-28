import { FC } from 'react';

import { Box, Stack, Typography } from '@mui/material';

import Brightness1Icon from '@mui/icons-material/Brightness1';

import TurnedInIcon from '@mui/icons-material/TurnedIn';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import Avatar from '@mui/material/Avatar';

import AvatarGroup from '@mui/material/AvatarGroup';

import { SvgLove, SvgMessage, SvgRedirect } from '../../../utils';

import SearchIcon from '@mui/icons-material/Search';

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
                <Stack alignItems={'center'} sx={{ ...iconInitial, ...space, top: '6%' }}>
                    <SearchIcon fontSize='large' />
                </Stack>

                <Stack alignItems={'center'} sx={{ ...iconInitial, bottom: '59%' }}>
                    <AvatarGroup max={4} >
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </AvatarGroup>
                    <Box>
                        <Brightness1Icon sx={{ ...iconInitial, color: 'red', bottom: '-38%', fontSize: '1rem' }} />
                        <AddCircleIcon sx={{ ...iconInitial, zIndex: 2, bottom: '-60%' }} fontSize='medium' />
                    </Box>
                </Stack>


                <Stack alignItems={'center'} sx={{ ...iconInitial, ...space, bottom: '46%' }}>
                    <SvgLove fontSize='large' />
                    <Typography>
                        {data?.inLike + 'k'}
                    </Typography>
                </Stack>

                <Stack alignItems={'center'} sx={{ ...iconInitial, ...space, bottom: '36%' }}>
                    <SvgMessage fontSize='large' />
                    <Typography>
                        {data?.inSend + 'k'}
                    </Typography>
                </Stack>

                <Stack alignItems={'center'} sx={{ ...iconInitial, ...space, bottom: '26%' }}>
                    <TurnedInIcon fontSize='large' />
                    <Typography>
                        {data?.inSave + 'k'}
                    </Typography>
                </Stack>


                <Stack spacing={0} alignItems={'center'} textAlign={'center'} sx={{ ...iconInitial, ...space, bottom: '16%' }}>
                    <SvgRedirect fontSize='large' />
                    <Typography>
                        {data?.inShare + 'k'}
                    </Typography>
                </Stack>


                <Stack alignItems={'center'} sx={{ ...iconInitial, bottom: '11%', animation: 'rotate-animation 10s infinite linear' }}>
                    <Box>
                        <Brightness1Icon sx={{ ...iconInitial, ...space }} />
                    </Box>
                    <AvatarGroup max={4}>
                        <Avatar sx={{ ...iconInitial, width: 18, height: 18 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </AvatarGroup>
                </Stack>

            </Stack>

        </>

    )
}
