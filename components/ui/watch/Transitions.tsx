import { useContext } from 'react';

import Box from '@mui/material/Box';

import Slide from '@mui/material/Slide';

import { UIContext } from '../../../context/ui';

import { MountScreen } from './';

import { seeDatabase } from '../../../database';


export const Transitions = () => {
    const { transMenuOpen } = useContext(UIContext);

    return (
        <>
            <Slide direction="up" in={transMenuOpen} mountOnEnter unmountOnExit>
                <Box sx={{ width: 'inherit', height: 'inherit', backgroundColor: '#000' }}>
                    {
                       seeDatabase.initialData.dataFor.map((data, key) => (
                            <MountScreen data={data} key={key} />
                        ))
                    }
                </Box>
            </Slide>
        </>

    )
}
