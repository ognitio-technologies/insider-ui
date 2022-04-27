import { createTheme } from "@mui/material/styles";
import { red, amber, blueGrey, lightBlue } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: lightBlue[50],
      main: lightBlue[700],
    },
    secondary: {
      light: blueGrey[100],
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
    h3: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "1.5rem",
    },
    h4: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "1.2rem",
    },
  },
});

export default theme;
