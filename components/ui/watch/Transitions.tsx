import { useContext } from 'react';

import Box from '@mui/material/Box';

import Slide from '@mui/material/Slide';

import { UIContext } from '../../../context/ui';

import { initialData } from '../../../database';

import { MountScreen } from '.';

export const Transitions = () => {
    const { transMenuOpen } = useContext(UIContext);

    return (
        <>
            <Slide direction="up" in={transMenuOpen} mountOnEnter unmountOnExit>
                <Box sx={{ width: 'inherit', height: 'inherit', backgroundColor: '#000' }}>
                    {
                        initialData.user.map((data, key) => (
                            <MountScreen data={data} key={key} />
                        ))
                    }
                </Box>
            </Slide>
        </>

    )
}
