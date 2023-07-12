import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1b4b66",
      tint: "#639599",
    },
    error: {
      main: "#b00020",
    },
    highlight: {
      main: "#ff8c4b",
    },
    accent: {
      main: "#f4f4f4",
    },
    dark: {
      main: "#13101e",
    },
    bright: {
      main: "#fff",
    },
    grey: {
      main: "#f1f1f1",
    },
    lightText: {
      main: "#b6b6b6",
    },
    highEmphasis: {
      main: "#171520",
    },
    lowEmphasis: {
      main: "#626262",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

theme.typography.h3 = {
  fontSize: "2rem",
  fontWeight: "600",
  fontFamily: ["Inter", "sans-serif"].join(","),
};

export default theme;
