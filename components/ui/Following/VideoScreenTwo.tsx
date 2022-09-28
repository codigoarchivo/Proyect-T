import { FC } from 'react';

import { Box, Stack, Typography, Button } from '@mui/material';

import AvatarGroup from '@mui/material/AvatarGroup';

import Avatar from '@mui/material/Avatar';

import { IFollowing } from '../../../interfaces';

interface Props {
    data: IFollowing;
}

export const VideoScreenTwo: FC<Props> = ({ data }) => {

    const iconInitial = {
        position: 'absolute',
        zIndex: 1,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    };

    return (
        <>
            <Box display='flex' justifyContent={'space-between'}>
                {/* all icons */}
                <Box position={'relative'} mr={0} width={'100%'}>
                    <Stack position={'absolute'} height={'100vh'} width={'100%'} >

                        <Stack alignItems={'center'} sx={{ ...iconInitial, bottom: '59%' }}>
                            <AvatarGroup max={4} >
                                <Avatar sx={{ width: 60, height: 60 }} alt={data?.title} src={'/static/images/avatar/1.jpg'} />
                            </AvatarGroup>
                        </Stack>

                        <Typography sx={{ ...iconInitial, bottom: '54%', width: '100%' }}>
                            {data?.title}
                        </Typography>

                        <Typography variant="body2" sx={{ ...iconInitial, bottom: '50%', width: '100%' }}>
                            {data?.tags[0]}
                        </Typography>
                        <Button variant="contained" size="medium" sx={{ ...iconInitial, bottom: '40%' }}>
                            seguir
                        </Button>
                    </Stack>
                </Box>
            </Box>

            {/* all videos */}
            <video height={'inherit'} width={'inherit'} autoPlay muted loop >
                <source src={data?.videos[0]} type='video/mp4'></source>
            </video>

        </>
    )
}
