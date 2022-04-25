import { createTheme } from "@mui/material/styles";
import { red, amber, blueGrey } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: amber[800],
    },
    secondary: {
      main: blueGrey[900],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: blueGrey[50],
    },
  },
  typography: {
    h2: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: "2.2rem",
    },
    h4: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "1.2rem",
    },
  },
});

export default theme;
