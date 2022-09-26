import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        // palette values for dark mode
        background: {
            default: '#000000',
        },
        primary: {
            main: '#4a148c'
        },
        secondary: {
            main: '#efedee'
        },
        error: {
            main: red.A400
        },
    },
    components: {
    
    }
})