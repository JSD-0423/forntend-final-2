import React from "react";
import { Container, Link, Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


const StyledImage = styled("img")({
  width: "100%",
  objectFit: "fit",
  borderRadius: "16px",
  maxHeight: "500px",
});

const PlainSlide = () => {
  return (
    <>
      <Container
        maxWidth="100%"
        sx={{ margin: { xs: "30px 0", sm: "50px 0", md: "80px 0" } }}
      >
        <Grid container spacing={{ xs: 2, md: 5 }}>
          <Grid item xs={12}>
            <Link>
              <StyledImage
                src="/assests/images/plainSlide.png"
                alt="plainSlide"
              ></StyledImage>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link >
            {/* <Box sx={{backgroundImage:`url(/assests/images/skincare.png)`,backgroundSize:"cover",maxHeight: "230px"}}>
                dasdasd
            </Box> */}
              <StyledImage
                sx={{ maxHeight: "230px" }}
                src="/assests/images/skincare.png"
                alt="Skin Care"
              ></StyledImage>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link >
              <StyledImage
                sx={{ maxHeight: "230px" }}
                src="/assests/images/facepacks.png"
                alt="Face Packs"
              ></StyledImage>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PlainSlide;
