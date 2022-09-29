import { FC, useContext } from 'react';

import { Stack, Button, AvatarGroup, Avatar } from '@mui/material';

import MusicNoteIcon from '@mui/icons-material/MusicNote';

import CloseIcon from '@mui/icons-material/Close';

import { IforMe } from '../../../interfaces';

import { UIContext } from '../../../context/ui';


interface Props {
    data: IforMe;
}

export const SvgAndTextLeft: FC<Props> = ({ data }) => {
    // ui
    const { toggleTransMenu } = useContext(UIContext);

    const iconInitial = {
        position: 'absolute',
        zIndex: 20,
        left: '5%',
        textAlign: 'left',
    };

    const space = {
        width: '80%',
        height: 50,
        fontWeight: 'bold'
    };

    return (

        <Stack position={'absolute'} height={'100vh'} width={'100%'}>

            <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ ...iconInitial, ...space, top: '6%' }}>
                <CloseIcon onClick={toggleTransMenu} fontSize='large' />
                <Button variant="contained" size='small' startIcon={<MusicNoteIcon />} onClick={toggleTransMenu} >
                    Añadir Sonido
                </Button>
            </Stack>

            <Stack pl={5} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ ...iconInitial, width: '100%', bottom: '6%' }}>
                <CloseIcon onClick={toggleTransMenu} fontSize='large' />
                <Button variant="contained" size='small' startIcon={<MusicNoteIcon />} onClick={toggleTransMenu} >
                    Aña
                </Button>

                <div>
                    <AvatarGroup max={4}>
                        <Avatar alt="Remy Sharp" src={'/static/images/avatar/1.jpg'} />
                    </AvatarGroup>
                </div>

            </Stack>

        </Stack>
    )
}
