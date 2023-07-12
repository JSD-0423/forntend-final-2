import React from "react";
import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import PlainSlide from "../../../components/plain-slide";
import EastIcon from "@mui/icons-material/East";
import plainSlide from "../../../assets/images/plainSlide.png"
import skinCare from "../../../assets/images/skincare.png"
import facePack from "../../../assets/images/facepacks.png"



const Banner = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
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
            <Stack
              gap={{ xs: 1, sm: 1.5, lg: 3 }}
              alignItems="end"
              sx={{
                position: "absolute",
                top: "50%",
                right: "5%",
                transform: "translateY(-50%)",
              }}

              width={{xs:"100px",sm:"150px",md:"251px"}}
            >
              <Typography
                fontSize={{
                  xs: "0.8rem",
                  sm: "1.1rem",
                  md: "1.9rem",
                  lg: "2.5rem",
                }}
                sx={{
                  color: "#A53F64",
                  lineHeight: { xs: "18px", md: "40px" ,lg:"52px"},
                  textAlign: "right",
                }}
              >
                15% off and more!
              </Typography>
              <Box
                sx={{
                  borderRadius: "100%",
                  backgroundColor: "#fff",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EastIcon sx={{ color: "#A53F64" }} fontSize={isSmallScreen ? 'small' : 'large'}/>{" "}
              </Box>
            </Stack>
          </PlainSlide>
        </Grid>
        <Grid item xs={6} position="relative">
          <PlainSlide image={facePack}>
          <Stack
              gap={{ xs: 1, sm: 1.5, lg: 3 }}
              alignItems="end"
              sx={{
                position: "absolute",
                top: "50%",
                right: "5%",
                transform: "translateY(-50%)",
              }}

              width={{xs:"100px",sm:"150px",md:"251px"}}
            >
              <Typography
                fontSize={{
                  xs: "0.8rem",
                  sm: "1.1rem",
                  md: "1.9rem",
                  lg: "2.5rem",
                }}
                sx={{
                  color: "primary.main",
                  lineHeight: { xs: "18px", md: "40px" ,lg:"52px"},
                  textAlign: "right",
                }}
              >
              Popular in the community!
              </Typography>
              <Box
                sx={{
                  borderRadius: "100%",
                  backgroundColor: "#c1ccd2",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EastIcon color="primary.main" fontSize={isSmallScreen ? 'small' : 'large'}/>{" "}
              </Box>
            </Stack>
          </PlainSlide>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
