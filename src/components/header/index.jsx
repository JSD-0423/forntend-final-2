import {
  Box,
  Stack,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Container,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import DefaultInput from "../inputs/default-input";
import Logo from "../../assets/icons/logo.svg";
import heartIcon from "../../assets/icons/heart-primary.svg";
import userIcon from "../../assets/icons/user.svg";
import bagIcon from "../../assets/icons/bag.svg";
import NavLink from "../links/nav-link";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonWithIcon from "../buttons/button-with-Icon";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";

const Header = () => {
  const isLaptop = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [isMobileOpen, setMobileOpen] = useState(false);

  const categories = [
    "Handbags",
    "Watches",
    "Skincare",
    "Jewellery",
    "Apperels",
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <List>
      <ListItem>
        <ListItemText primary={"Categories"} />
      </ListItem>
      <Divider />
      {categories.map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
      <Divider />
      {[heartIcon, userIcon, bagIcon].map((icon, index) => {
        return isMobile ? (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemIcon>
                <img alt="icon" src={icon} />
              </ListItemIcon>
              <ListItemText
                primary={
                  index === 0
                    ? "Favourites"
                    : index === 1
                    ? "User Profile"
                    : "Cart"
                }
              />
            </ListItemButton>
          </ListItem>
        ) : null;
      })}
    </List>
  );

  return (
    <Container
      sx={{
        paddingTop: "30px",
        paddingBottom: "30px",
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={6}
      >
        <Box
          sx={{
            display: isLaptop ? "none" : "block",
          }}
        >
          <img alt="logo" src={Logo} />
        </Box>
        {isTablet ? (
          <ButtonWithIcon action={handleDrawerToggle} icon={<MenuIcon />} />
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap={3}
          >
            {categories.map((text, index) => {
              return (
                <NavLink
                  component={<Typography variant="h1">{text}</Typography>}
                  key={index}
                />
              );
            })}
          </Stack>
        )}
      </Stack>
      <Stack
        direction={"row"}
        gap={isMobile ? 0 : 3}
        justifyContent={"space-between"}
      >
        <Box
          sx={{
            width: isLaptop ? "200px" : "362px",
          }}
        >
          <DefaultInput
            placeholder="Search for products or brands..."
            adorment={<FiSearch size={25} />}
            size={isLaptop ? "0.6rem" : "0.9rem"}
          />
        </Box>

        {/* TODO: change Icon Button to buttonWithIcon */}
        <Stack gap={2} direction={"row"} justifyContent={"space-between"}>
          {[heartIcon, userIcon, bagIcon].map((icon, index) => {
            return !isMobile ? (
              <IconButton key={index} sx={{ padding: "0px" }}>
                <img alt="icon" src={icon} />
              </IconButton>
            ) : null;
          })}
        </Stack>
      </Stack>
      <Drawer
        variant="temporary"
        open={isMobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </Container>
  );
};

export default Header;
