import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  aspectRatio: "1/1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  borderRadius: "12px",
}));

export default StyledBox;
