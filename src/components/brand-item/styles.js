import { styled } from "@mui/material/styles";

const StyledImage = styled("img")(({ theme }) => ({
  aspectRatio: "1/1",
  width: "100%",
  objectFit:"contain",
  borderRadius:"16px"
}));

export default StyledImage;
