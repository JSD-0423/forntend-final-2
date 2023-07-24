import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import herosection from "../../assets/images/herosection.png";
import herosection2 from "../../assets/images/herosection2.png";
import facepacks from "../../assets/images/facepacks.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";
import { useEffect } from "react";
const ProductCarousel = ({ productData }) => {
  const [showImage, setShowImage] = useState();
  const images = [
    productData?.productImages[0].image_url,
    herosection2,
    herosection,
  ];
  useEffect(() => {
    setShowImage(productData?.productImages[0].image_url);
  }, [productData]);
  const handleImageShow = (src) => {
    setShowImage(src);
  };

  const handleChangeImageIncrease = () => {
    const index = images.indexOf(showImage);
    if (index === images.length - 1) {
      setShowImage(images[0]);
    } else {
      setShowImage(images[index + 1]);
    }
  };
  const handleChangeImageDecrease = () => {
    const index = images.indexOf(showImage);
    if (index === 0) {
      setShowImage(images[images.length - 1]);
    } else {
      setShowImage(images[index - 1]);
    }
  };
  return (
    <Grid item xs={12} md={6}>
      <img
        src={showImage}
        alt="pdp"
        height={"320px"}
        width="100%"
        style={{ objectFit: "cover", borderRadius: "16px" }}
      />
      <Stack
        direction={"row"}
        justifyContent="center"
        alignItems={"center"}
        gap={2}
      >
        <ArrowBackIosNewIcon
          onClick={handleChangeImageDecrease}
          sx={{ cursor: "pointer" }}
        />

        {images.map((item, index) => {
          return (
            <Button onClick={() => handleImageShow(item)} key={index}>
              <img
                src={item}
                alt="pdp"
                style={{
                  objectFit: "cover",
                  borderRadius: "16px",
                  width: "75px",
                  height: "75px",
                }}
              />
            </Button>
          );
        })}
        <ArrowForwardIosIcon
          onClick={handleChangeImageIncrease}
          sx={{ cursor: "pointer" }}
        />
      </Stack>
    </Grid>
  );
};

export default ProductCarousel;
