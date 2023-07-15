<<<<<<< HEAD
=======
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

// TODO: fix browser compatibility issues, "make sure the scrollbar behaves the same on all browsers"
const StyledStack = styled(Stack)(({ theme }) => ({
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export default StyledStack;
>>>>>>> main
