import React from "react";
import { Container, Typography, Link, Divider, Stack } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import useAxios from "../../utils/use-axios";
import NavLink from "../links/nav-link";
const Footer = () => {
  const [categories] = useAxios(
    "https://app-68c6b164-71cf-4968-8378-502de2661021.cleverapps.io/categories"
  );
  return (
    <Container sx={{ bgcolor: "primary.main" }} maxWidth="100%">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        sx={{ padding: "30px", paddingBottom: "70px" }}
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
            {
              categories?.categories?.map((item)=>{
                return <NavLink                   path={`/category?category=${item.id}`}
                component={<Link sx={{ color: "lightText.main" }}>{item.title}</Link>}/>
              })
            }
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
        <Stack spacing={2}>
          <Divider
            sx={{
              width: "100%",
              height: "1px",
              bgcolor: "primary.tint",
              display: { xs: "block", sm: "none" },
            }}
          />
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
    </Container>
  );
};

export default Footer;
