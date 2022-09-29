import { FC, useContext, useRef } from 'react';

import { useRouter } from 'next/router';

import { Box, Stack, Typography, Button } from '@mui/material';

import Brightness1Icon from '@mui/icons-material/Brightness1';

import TurnedInIcon from '@mui/icons-material/TurnedIn';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import Avatar from '@mui/material/Avatar';

import AvatarGroup from '@mui/material/AvatarGroup';

import { SvgLove, SvgMessage, SvgRedirect } from '../../../utils';

import SearchIcon from '@mui/icons-material/Search';

import { IforMe } from '../../../interfaces';

import { EntriesContext } from '../../../context/entries';


interface Props {
    d: IforMe;
}

export const SvgAndTextRight: FC<Props> = ({ d }) => {
    //  entries
    const { upload, listAdd } = useContext(EntriesContext);

    const initUpload = useRef<HTMLInputElement>(null)

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
    const handlePictureClick = () => {
        if (typeof initUpload.current !== null) {
            initUpload.current?.click();
        }
    };

    const handleFileChange = ({ target }: any) => {
        const file = target.files[0];
        if (file) upload(file);
    };


    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (d) {
            listAdd(d)
        }
    }
    return (
        <>
            <Stack position={'absolute'} height={'100vh'} width={'100%'} >
                <Stack alignItems={'center'} sx={{ ...iconInitial, ...space, top: '6%' }}>
                    <SearchIcon fontSize='large' />
                </Stack>

                <Stack spacing={1} alignItems={'center'} sx={{ ...iconInitial, bottom: '59%' }}>
                    <Box onClick={handlePictureClick}>
                        {/* <Brightness1Icon sx={{ ...iconInitial, color: 'red', bottom: '-38%', fontSize: '1rem' }} /> */}
                        <AddCircleIcon sx={{ ...iconInitial, zIndex: 2, bottom: '-60%' }} fontSize='medium' />
                    </Box>

                    <form onSubmit={handleSubmit}>
                        <Button type={'submit'} size="small" variant="outlined">
                            add video
                        </Button>
                    </form>
                    <div>
                        <input
                            ref={initUpload}
                            name="file"
                            type="file"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                    </div>
                    {/* <AvatarGroup max={4} onClick={handlePictureClick}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </AvatarGroup>
                    <Box>
                        <Brightness1Icon sx={{ ...iconInitial, color: 'red', bottom: '-38%', fontSize: '1rem' }} />
                        <AddCircleIcon sx={{ ...iconInitial, zIndex: 2, bottom: '-60%' }} fontSize='medium' />
                    </Box> */}
                </Stack>



                <Stack alignItems={'center'} sx={{ ...iconInitial, ...space, bottom: '46%' }}>
                    <SvgLove fontSize='large' />
                    <Typography>
                        {d?.inLike + 'k'}
                    </Typography>
                </Stack>

                <Stack alignItems={'center'} sx={{ ...iconInitial, ...space, bottom: '36%' }}>
                    <SvgMessage fontSize='large' />
                    <Typography>
                        {d?.inSend + 'k'}
                    </Typography>
                </Stack>

                <Stack alignItems={'center'} sx={{ ...iconInitial, ...space, bottom: '26%' }}>
                    <TurnedInIcon fontSize='large' />
                    <Typography>
                        {d?.inSave + 'k'}
                    </Typography>
                </Stack>


                <Stack spacing={0} alignItems={'center'} textAlign={'center'} sx={{ ...iconInitial, ...space, bottom: '16%' }}>
                    <SvgRedirect fontSize='large' />
                    <Typography>
                        {d?.inShare + 'k'}
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
