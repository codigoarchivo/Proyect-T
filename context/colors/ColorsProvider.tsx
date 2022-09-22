import { FC, ReactNode, useState, useMemo, useEffect } from 'react';

import { ThemeProvider } from '@mui/material';

import { lightTheme, darkTheme } from '../../themes';

import { ColorsContext } from '.';



interface PropsChildren {
    children: ReactNode
}

export const ColorsProvider: FC<PropsChildren> = ({ children }) => {

    const [mode, setMode] = useState<string | null>('light');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setMode(localStorage.getItem('mode'))
        }
    }, [])

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const nexMode = prevMode === 'light' ? 'dark' : 'light'
                    localStorage.setItem('mode', nexMode)
                    return nexMode
                }
                );
            },
        }),
        [],
    );

    const theme = useMemo(() => mode === 'light' ? lightTheme : darkTheme, [mode]);

    return (
        <ColorsContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorsContext.Provider>
    )
}