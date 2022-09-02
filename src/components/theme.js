import { createTheme } from "@mui/material/styles";

const primary = "#FBB03B"; // Blue
const secondary = "#19B0ED"; // Golden
const ternary = "#ffffff"; // White
const background = "#1C1C26"; // Black
const lightBack = "#2D2E39"

const breakpoints = {
  // for responsiveness
  values: {
    xs: 0,
    xms: 380,
    sm: 600, // Phone
    md: 900, // Tablet/Laptop
    lg: 1200, // Desktop
    xl: 1536,
  },
};

const theme = createTheme({
  breakpoints: breakpoints,
  palette: {
    primary: {
      main: primary,
      contrastText: background,
    },
    secondary: {
      main: secondary,
      contrastText: background,
    },
    ternary: {
      main: ternary,
      contrastText: background,
    },
    background: {
      default: background,
      paper: lightBack,
      contrastText: ternary,
    },
    success: {
      main: "#00ff00",
    },
    error: {
      main: "#ff0000",
    },
  },
  components: {},
  typography: {
    fontFamily: "'Titillium Web', sans-serif",
    allVariants: {
      color: ternary,
    },
  },
});


export default theme;