import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "280px",
  width: "280px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  borderRadius: "12px",
  [theme.breakpoints.down("sm")]: {
    height: "150px",
    width: "156px",
  },
}));

export default StyledBox;
