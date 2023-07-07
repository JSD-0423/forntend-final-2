import React from "react";
import {
  Container,
  Typography,
  Link,
  Divider,
  Stack,
} from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const Footer = () => {
  return (
    <Container sx={{ bgcolor: "primary.main" }} maxWidth="100%">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        sx={{ padding: {xs:"25px 5px",sm:"30px"}, paddingBottom:"70px" }}
        spacing={3}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, md: 10 }}
        >
          <Stack spacing={1}>
            <Typography sx={{ color: "bright.main" }}>
              Shop by Category
            </Typography>
            <Link sx={{ color: "lightText.main" }}>Skincare</Link>
            <Link sx={{ color: "lightText.main" }}>Personal Care</Link>
            <Link sx={{ color: "lightText.main" }}>Handbags</Link>
            <Link sx={{ color: "lightText.main" }}>Apparels</Link>
            <Link sx={{ color: "lightText.main" }}>Watches</Link>
            <Link sx={{ color: "lightText.main" }}>Eye Wear</Link>
            <Link sx={{ color: "lightText.main" }}>Jewellers</Link>
          </Stack>
          <Stack spacing={1}>
            <Typography sx={{ color: "bright.main" }}>
              Shop by products
            </Typography>
            <Link sx={{ color: "lightText.main" }}>featured </Link>
            <Link sx={{ color: "lightText.main" }}>trendy </Link>
            <Link sx={{ color: "lightText.main" }}>brands </Link>
          </Stack>
        </Stack>
        <Stack spacing={2} >
        <Divider sx={{ width: "100%", height: "1px", bgcolor: "primary.tint", display:{xs:"block",sm:"none"} }}  /> 
          <Stack
            direction="row"
            gap={2}
            justifyContent={{ xs: "flex-start", sm: "flex-end" }}
          >
            <FacebookOutlinedIcon
              sx={{ color: "primary.tint" }}
              fontSize="large"
            />
            <InstagramIcon sx={{ color: "primary.tint" }} fontSize="large" />
            <TwitterIcon sx={{ color: "primary.tint" }} fontSize="large" />
            <YouTubeIcon sx={{ color: "primary.tint" }} fontSize="large" />
          </Stack>
          <Stack spacing={0.5}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              justifyContent={{ xs: "flex-start", sm: "flex-end" }}
            >
              {" "}
              <LocationOnOutlinedIcon
                sx={{ color: "bright.main" }}
                fontSize="medium"
              />
              <Typography sx={{ color: "bright.main" }}>
                United States
              </Typography>
            </Stack>
            <Typography sx={{ color: "lightText.main" }}>
            © 2021 | Cora Leviene All Rights Reserved
          </Typography>
          </Stack>
          
        </Stack>
      </Stack>
      {/* <Grid
        container
        spacing={2}
        justifyContent="space-between"
        sx={{ padding: "30px" }}
      >
        <Stack container item maxWidth="sm" direction="row" gap={4}>
          <Stack item xs={12} >
            <Typography sx={{ color: "bright.main" }}>
              Shop by Category
            </Typography>
            <Typography sx={{ color: "lightText.main" }}>Skincare</Typography>
            <Typography sx={{ color: "lightText.main" }}>
              Personal Care
            </Typography>
            <Typography sx={{ color: "lightText.main" }}>Handbags</Typography>
            <Typography sx={{ color: "lightText.main" }}>Apparels</Typography>
            <Typography sx={{ color: "lightText.main" }}>Watches</Typography>
            <Typography sx={{ color: "lightText.main" }}>Eye Wear</Typography>
            <Typography sx={{ color: "lightText.main" }}>Jewellers</Typography>
          </Stack>
          <Grid item xs={12} sm={3}>
            <Typography sx={{ color: "bright.main" }}>
              Shop by products
            </Typography>
            <Typography sx={{ color: "lightText.main" }}>featured </Typography>
            <Typography sx={{ color: "lightText.main" }}>trendy </Typography>
            <Typography sx={{ color: "lightText.main" }}>brands </Typography>
          </Grid>
        </Stack>
        <Stack container item xs={12} sm={2} >
          <Stack direction="row" gap={2} paddingTop="20px" justifyContent="flex-end">
            {" "}
            <FacebookOutlinedIcon
              sx={{ color: "primary.tint" }}
              fontSize="large"
            />
            <InstagramIcon sx={{ color: "primary.tint" }} fontSize="large" />
            <TwitterIcon sx={{ color: "primary.tint" }} fontSize="large" />
            <YouTubeIcon sx={{ color: "primary.tint" }} fontSize="large" />
          </Stack>
          <Stack direction="row" justifyContent="flex-end" alignItems="center" gap={1} >
            <LocationOnOutlinedIcon sx={{ color: "bright.main" }} fontSize="small" />
            <Typography sx={{ color: "bright.main" }}>United States</Typography>
          </Stack>
          <Typography sx={{ color: "lightText.main" }}>© 2021 | Cora Leviene All Rights Reserved</Typography>

        </Stack>
      </Grid>
      
      <Divider sx={{ width: "100%", height: 1, bgcolor: "primary.tint" }} /> */}
    </Container>
  );
};

export default Footer;
