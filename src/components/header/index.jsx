import { Box, Stack, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import DefaultInput from "../inputs/default-input";
import Logo from "../../assets/icons/logo.svg";
import heartIcon from "../../assets/icons/heart-primary.svg";
import userIcon from "../../assets/icons/user.svg";
import bagIcon from "../../assets/icons/bag.svg";
import NavLink from "../links/nav-link";

const Header = () => {
  return (
    <Stack
      sx={{
        paddingTop: "30px",
        paddingBottom: "30px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={6}
      >
        <img src={Logo} />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={3}
        >
          {["Handbags", "Watches", "Skincare", "Jewellery", "Apperels"].map(
            (text, index) => {
              return (
                <NavLink
                  component={<Typography variant="h1">{text}</Typography>}
                  key={index}
                />
              );
            }
          )}
        </Stack>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box sx={{ width: "362px" }}>
          <DefaultInput
            placeholder="Search for products or brands..."
            adorment={<FiSearch size={25} />}
          />
        </Box>
      </Stack>
      {/* TODO: change Icon Button to buttonWithIcon */}
      <Stack gap={2} direction={"row"} justifyContent={"space-between"}>
        {[heartIcon, userIcon, bagIcon].map((icon) => {
          return (
            <IconButton sx={{ padding: "0px" }}>
              <img src={icon} />
            </IconButton>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Header;
