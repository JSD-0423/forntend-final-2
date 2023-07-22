import { styled } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";

const StyeldTabButton = styled(ButtonBase)(({ theme }) => ({
  color: `${theme.palette.lowEmphasis.main} !important`,
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: "8px !important",
  textTransform: "none !important",
  width: "100%",
  display: "flex",
  minHeight: "auto !important",
  height: "fit-content",
  padding: "6px !important",

  [theme.breakpoints.up(400)]: {
    fontSize: "16px !important",
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.bright.main} !important`,
  },
}));

export { StyeldTabButton };
