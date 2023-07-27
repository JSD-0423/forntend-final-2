import { styled } from "@mui/material/styles";

const StyledImage = styled("img")(({ theme }) => ({
  aspectRatio: "1/1",
  width: "100%",
  objectFit:"none",
  borderRadius:"16px",
  backgroundColor:"#f4f4f4"
}));

export default StyledImage;
