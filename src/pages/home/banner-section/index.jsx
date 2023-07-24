import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import PlainSlide from "../../../components/plain-slide";
import plainSlide from "../../../assets/images/plainSlide.png";
import skinCare from "../../../assets/images/skincare.png";
import facePack from "../../../assets/images/facepacks.png";
import PlainContent from "../../../components/plain-content";
import NavLink from "../../../components/links/nav-link";

const Banner = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Container
      maxWidth="100%"
      sx={{ marginBottom: { xs: "30px", sm: "50px", md: "80px" } }}
    >
      <Grid container spacing={{ xs: 2, md: 5 }}>
        <Grid item xs={12}>
          <NavLink
            path={`/category?type=limited-edition`}
            component={
              <PlainSlide
                image={plainSlide}
                heightPic={{
                  xs: "140px",
                  sm: "200px",
                  md: "300px",
                  lg: "400px",
                }}
              >
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
                    color="#97451F"
                  >
                    limited edition products
                  </Typography>
                </Stack>
              </PlainSlide>
            }
          />
        </Grid>
        <Grid item xs={6}>
          <NavLink
            path={`/category?type=discount`}
            component={
              <PlainSlide
                image={skinCare}
                heightPic={{
                  xs: "100px",
                  sm: "130px",
                  md: "180px",
                  lg: "230px",
                }}
              >
                <PlainContent
                  color="#A53F64"
                  text="15% off and more!"
                  fontSize={isSmallScreen ? "small" : "large"}
                />
              </PlainSlide>
            }
          />
        </Grid>
        <Grid item xs={6} position="relative">
          <NavLink
            path={`/category?type=popular`}
            component={
              <PlainSlide
                image={facePack}
                heightPic={{
                  xs: "100px",
                  sm: "130px",
                  md: "180px",
                  lg: "230px",
                }}
              >
                <PlainContent
                  color="primary.main"
                  text="Popular in the community!"
                  fontSize={isSmallScreen ? "small" : "large"}
                />
              </PlainSlide>
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
