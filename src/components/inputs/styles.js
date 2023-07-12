import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

// fix place holder color
const StyledTextField = styled(TextField)(({ theme, size }) => ({
  "& .MuiInputBase-root": {
    "& .MuiInputAdornment-root.MuiInputAdornment-filled": {
      marginTop: "0px !important",
    },
    "& .MuiInputBase-input": {
      paddingTop: "10px",
      paddingBottom: "10px",
      fontSize: size,
      color: theme.palette.lowEmphasis.main,
      "&::placeholder": {
        color: theme.palette.lowEmphasis.main,
        fontSize: size,
        fontWieght: "700 !important",
      },
    },
    "&:before": {
      borderBottom: "0px",
    },
  },
}));

export default StyledTextField;
