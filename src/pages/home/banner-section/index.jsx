import React from "react";
import { Container, Grid, Stack, Typography} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import PlainSlide from "../../../components/plain-slide";
import plainSlide from "../../../assets/images/plainSlide.png";
import skinCare from "../../../assets/images/skincare.png";
import facePack from "../../../assets/images/facepacks.png";
import PlainContent from "../../../components/plain-content";

const Banner = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Container
      maxWidth="100%"
      sx={{ margin: { xs: "30px 0", sm: "50px 0", md: "80px 0" } }}
    >
      <Grid container spacing={{ xs: 2, md: 5 }}>
        <Grid item xs={12}>
          <PlainSlide image={plainSlide}>
            <Stack
              gap={{ xs: 1, sm: 1.5, lg: 3 }}
              alignItems="end"
              sx={{
                position: "absolute",
                top: "50%",
                left: "5%",
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                fontSize={{
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "2.3rem",
                }}
              >
                limited edition products
              </Typography>
            </Stack>
          </PlainSlide>
        </Grid>
        <Grid item xs={6}>
          <PlainSlide image={skinCare}>
            <PlainContent
              color="#A53F64"
              text="15% off and more!"
              fontSize={isSmallScreen ? "small" : "large"}
            />
          </PlainSlide>
        </Grid>
        <Grid item xs={6} position="relative">
          <PlainSlide image={facePack}>
            <PlainContent
              color="primary.main"
              text="Popular in the community!"
              fontSize={isSmallScreen ? "small" : "large"}
            />
          </PlainSlide>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
