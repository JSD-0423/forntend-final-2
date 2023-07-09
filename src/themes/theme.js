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
    fontFamily: [
      "Nunito Sans",
      "Roboto",
      "'Helvetica Neue'",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

theme.typography.h1 = {
  fontSize: "2rem",
  color: "#17494D",
  fontWeight: 700,
  fontFamily: [
    "Nunito Sans",
    "Roboto",
    "'Helvetica Neue'",
    "Arial",
    "sans-serif",
  ].join(","),
};

theme.typography.h2 = {
  fontFamily: [
    "Nunito Sans",
    "Roboto",
    "'Helvetica Neue'",
    "Arial",
    "sans-serif",
  ].join(","),
  color: theme.palette.highEmphasis,
  fontSize: "1rem",
};

export default theme;
