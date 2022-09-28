import { FC, useContext, useRef } from 'react';

import { Stack, Button, AvatarGroup, Avatar } from '@mui/material';

import MusicNoteIcon from '@mui/icons-material/MusicNote';

import CloseIcon from '@mui/icons-material/Close';

import { IforMe } from '../../../interfaces';

import { UIContext } from '../../../context/ui';

import { EntriesContext } from '../../../context/entries';

interface Props {
    data: IforMe;
}

export const SvgAndTextLeft: FC<Props> = ({ data }) => {
    // ui
    const { toggleTransMenu } = useContext(UIContext);
    //  entries
    const { startUploading } = useContext(EntriesContext);

    const upload = useRef<HTMLInputElement>(null)

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

    const handlePictureClick = () => {
        if (typeof upload.current !== null) {
            upload.current?.click();
        }
    };

    const handleFileChange = ({ target }: any) => {
        const file = target.files[0];
        if (file) startUploading(file);
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
                    <AvatarGroup max={4} onClick={handlePictureClick}>
                        <Avatar alt="Remy Sharp" src={'/static/images/avatar/1.jpg'} />
                    </AvatarGroup>
                    <input
                        ref={upload}
                        name="file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </div>

            </Stack>

        </Stack>
    )
}
