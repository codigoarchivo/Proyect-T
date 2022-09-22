import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        // palette values for light mode
        background: {
            default: '#efedee'
        },
        primary: {
            main: '#fec80b'
        },
        secondary: {
            main: '#000000'
        },
        error: {
            main: red.A400
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    paddingBottom: '14px !important'
                }
            }
        }
    }
})