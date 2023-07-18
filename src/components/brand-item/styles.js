import { styled } from "@mui/material/styles";

const StyledImage = styled("img")(({ theme }) => ({
  height: "168px",
  width: "168px",
  [theme.breakpoints.down("sm")]: {
    height: "100px",
    width: "100px",
  },
}));

export default StyledImage;
