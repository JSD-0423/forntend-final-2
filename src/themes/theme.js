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

<<<<<<< HEAD
theme.typography.h2 = {
  fontSize: "2rem",
  fontWeight: "600",
  color: theme.palette.dark.main,
  fontFamily: ["Inter", "sans-serif"].join(","),
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
};

theme.typography.body2 = {
  fontSize: "1rem",
  fontWeight: 500,
  color: theme.palette.highEmphasis.main,
  fontFamily: ["Inter", "sans-serif"].join(","),
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    fontWeight: 600,
  },
};

theme.typography.body1 = {
  fontSize: "1rem",
  fontWeight: 500,
  color: theme.palette.lowEmphasis.main,
  fontFamily: ["Inter", "sans-serif"].join(","),
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    fontWeight: 500,
  },
};
=======

>>>>>>> 2fc44e02015ba6c90516b586bbd70859fa21386a

export default theme;
