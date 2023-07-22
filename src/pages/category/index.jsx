import { Container,Box,Typography } from "@mui/material";
import React from "react";
import PlainSlide from "../../components/plain-slide";
import categoryHero from "../../assets/images/category-hero.png";

const Category = () => {
  return (
    <Container maxWidth="100%" sx={{margin:"24px 0 66px 0"}}>
      <PlainSlide
        image={categoryHero}
        heightPic={{ xs: "140px", sm: "200px", md: "300px", lg: "450px" }}
      >
        <Box
            spacing={2}
            sx={{
              position: "absolute",
              top: "50%",
              right: "6%",
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              sx={{ color: "#13101E" }}
              fontSize={{ xs: "20px",sm:"35px", md: "50px", lg: "72px" }}
              fontWeight="700"
              lineHeight={{sm:"50px",lg:"87.14px"}}
            >
              UPTO 70% OFF
            </Typography>
            
              <Typography
                sx={{ color: "#13101E" }}
                fontSize={{ xs: "20px",sm:"35px", md: "50px", lg: "72px" }}
                fontWeight="400"
                lineHeight={{sm:"50px",lg:"87.14px"}}
                >
                BLACK FRIDAY
              </Typography>
          </Box>
      </PlainSlide>
    </Container>
  );
};

export default Category;
