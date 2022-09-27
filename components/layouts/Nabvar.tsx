import { useContext } from 'react';

import { Typography, Grid, Stack } from '@mui/material';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import HomeIcon from '@mui/icons-material/Home';

import AddToQueueIcon from '@mui/icons-material/AddToQueue';

import AssistantIcon from '@mui/icons-material/Assistant';

import PersonIcon from '@mui/icons-material/Person';

import { UIContext } from '../../context/ui';

export const Nabvar = () => {
    
    const { toggleTransMenu } = useContext(UIContext);
    
    return (
        <Grid textAlign={'center'} spacing={0} px={3} sx={{ height: '6vh' }} container justifyContent={'space-between'}>
            <Grid>
                <Stack>
                    <HomeIcon />
                    <Typography fontSize={'.5rem'}>
                        Inicio
                    </Typography>
                </Stack>
            </Grid>
            <Grid>
                <Stack>
                    <PeopleAltIcon />
                    <Typography fontSize={'.5rem'}>
                        Amigos
                    </Typography>
                </Stack>
            </Grid>
            <Grid>
                <Stack>
                    <AddToQueueIcon onClick={toggleTransMenu} sx={{ width: 30, height: 30 }} />
                </Stack>
            </Grid>
            <Grid>
                <Stack>
                    <AssistantIcon />
                    <Typography fontSize={'.5rem'}>
                        Bandeja
                    </Typography>
                </Stack>
            </Grid>
            <Grid>
                <Stack>
                    <PersonIcon />
                    <Typography fontSize={'.5rem'}>
                        Perfil
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}
