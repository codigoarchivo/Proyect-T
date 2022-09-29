import { FC, useContext, useState, useEffect, useMemo } from 'react';

import Marquee from 'react-fast-marquee';

import { Stack, Typography, Box, Button } from '@mui/material';

import MusicNoteIcon from '@mui/icons-material/MusicNote';

import { IforMe } from '../../../interfaces';


interface Props {
    data: IforMe;
}

export const SvgAndTextLeft: FC<Props> = ({ data }) => {
    const [show, setShow] = useState(true);
    
    const iconInitial = {
        position: 'absolute',
        zIndex: 20,
        left: '5%',
        textAlign: 'left',
    };

  
    return (

        <Stack position={'absolute'} height={'100vh'} width={'100%'}>
            <Stack alignItems={'center'} sx={{ ...iconInitial, bottom: '12%' }} width={'100%'}>

                <Stack spacing={1} style={{ position: 'absolute', left: '0%', bottom: '53%' }}>
                    <Typography fontWeight={600}>{data.title}</Typography>

                    <Typography sx={{ wordBreak: 'break-word' }} >
                        {data?.description && data?.description.slice(0, show ? 60 : data?.description.length)}
                        <Button
                            variant="text"
                            onClick={() => setShow(!show)}
                            sx={{ textTransform: 'capitalize' }}
                        >
                            {show ? 'Ver más' : 'Ocultar'}
                        </Button>
                    </Typography>

                </Stack>

            </Stack>

            <Stack spacing={0} flexDirection={'row'} alignItems={'center'} sx={{ ...iconInitial, bottom: '8%' }}>
                <Box>
                    <MusicNoteIcon sx={{ left: '0%', width: 16, height: 16, display: 'flex' }} />
                </Box>
                <Marquee gradient={false} style={{ left: '2%', width: '60%' }}>
                    <Typography> {data.title}</Typography>
                </Marquee>
            </Stack>
        </Stack>
    )
}
