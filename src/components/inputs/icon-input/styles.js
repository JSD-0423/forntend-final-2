import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "&. MuiInputBase MuiFilledInput": {
    "&:after": {
      borderBottom: 0,
    },
  },
}));

export default StyledTextField;
