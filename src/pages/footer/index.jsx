import React from "react";
import { Container, Typography, Link, Divider, Stack } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import useAxiosGet from "../../utils/use-axios-get";
import NavLink from "../../components/links/nav-link";
import { NavHashLink } from "react-router-hash-link";
import facebook from "../../assets/icons/fblogo.svg";
import instagram from "../../assets/icons/insta.svg";
import twitter from "../../assets/icons/twitter.svg";
import youTube from "../../assets/icons/youtube.svg";

const Footer = () => {
  const { data } = useAxiosGet(
    "https://app-68c6b164-71cf-4968-8378-502de2661021.cleverapps.io/categories"
  );

  return (
    <Container
      sx={{
        bgcolor: "primary.main",
      }}
      maxWidth="100%"
    >
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
            {data?.categories?.map((item) => {
              console.log(item);
              return (
                <NavLink
                  path={`/category?category=${item.id}`}
                  component={
                    <Link sx={{ color: "lightText.main" }}>{item.title}</Link>
                  }
                />
              );
            })}
          </Stack>
          <Stack spacing={1}>
            <Typography sx={{ color: "bright.main" }}>
              Shop by products
            </Typography>
            <NavHashLink style={{ textDecoration: "none" }} to={"/#handPicked"}>
              <Typography color="lightText.main">Featured</Typography>
            </NavHashLink>
            <NavHashLink style={{ textDecoration: "none" }} to={"/#banner"}>
              <Typography color="lightText.main">Trendy</Typography>
            </NavHashLink>
            <NavHashLink style={{ textDecoration: "none" }} to={"/#brands"}>
              <Typography color="lightText.main">Brands</Typography>{" "}
            </NavHashLink>
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
            flexWrap="wrap"
          >
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={youTube} alt="youTube" />
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
