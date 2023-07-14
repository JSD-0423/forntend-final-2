import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// TODO: make icon size changable
const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: "6px",
  fontSize: "0.9rem",
}));

export default StyledButton;
