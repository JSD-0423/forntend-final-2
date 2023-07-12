import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledImage = styled("img")({
  width: "100%",
  objectFit: "cover",
  borderRadius: "16px",
  maxHeight: "500px",
  minHeight:"100px"
});

const PlainSlide = ({children,image}) => {
  return (
    <Box position="relative"  >
    <StyledImage
      src={`${image}`} 
      alt="Product"
    ></StyledImage>
    {children} 
  </Box>
  );
};

export default PlainSlide;
