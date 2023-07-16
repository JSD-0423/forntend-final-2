import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledImage = styled("img")({
  width: "100%",
  objectFit: "cover",
  borderRadius: "16px",
});

const PlainSlide = ({children,image,heightPic}) => {
  return (
    <Box position="relative"  >
    <StyledImage
      src={image}
      alt="Product"
      sx={{height:heightPic}}
    ></StyledImage>
    {children} 
  </Box>
  );
};

export default PlainSlide;
