import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Container,
  IconButton,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import DefaultInput from "../../components/inputs/default-input";
import Logo from "../../assets/icons/logo.svg";
import heartIcon from "../../assets/icons/heart-primary.svg";
import userIcon from "../../assets/icons/user.svg";
import bagIcon from "../../assets/icons/bag.svg";
import NavLink from "../../components/links/nav-link";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonWithIcon from "../../components/buttons/button-with-Icon";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useContext, useState } from "react";
import useAxiosGet from "../../utils/use-axios-get";
import { useNavigate } from "react-router-dom";
import FavouritesContext from "../../contexts/favourite-context";
import { SimpleDialog } from "../user-profile";
import Favourites from "../favourites";

const Header = () => {
  const isLaptop = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [isMobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const { data } = useAxiosGet("/categories");
  const { data: favourites, forceUpdate } = useAxiosGet(
    "/favourites",
    "get",
    true
  );

  const { setAnchorEl } = useContext(FavouritesContext);

  const handleFavClick = (e) => {
    forceUpdate();
    setAnchorEl(e.currentTarget);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleUserSearch = (e) => {
    setSearch(e.target.value);
    if (e.keyCode === 13) {
      navigate(`/category?q=${search}`, { replace: true });
      setSearch("");
    }
  };

  const drawer = (
    <List>
      <ListItem>
        <ListItemText primary={"Categories"} />
      </ListItem>
      <Divider />
      {data?.categories?.map((text, index) => {
        if (index <= 4) {
          return (
            <ListItem key={text.id} disablePadding>
              <ListItemButton>
                <NavLink
                  path={`/category?category=${text.id}`}
                  component={<ListItemText primary={text.title} />}
                />
              </ListItemButton>
            </ListItem>
          );
        }
        return null;
      })}
      <Divider />
      {[
        [heartIcon, "#", handleFavClick],
        [userIcon, "#", handleClickOpen],
        [bagIcon, "/cart"],
      ].map(([icon, path, action], index) => {
        return isMobile ? (
          <NavLink
            path={path}
            component={
              <ListItem key={index}>
                <ListItemButton onClick={action}>
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
            }
          />
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
          <NavLink path="/" component={<img alt="logo" src={Logo} />} />
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
            {data?.categories?.map((text, index) => {
              if (index <= 4) {
                return (
                  <NavLink
                    path={`/category?category=${text.id}`}
                    component={
                      <Typography variant="h1">{text.title}</Typography>
                    }
                    key={text.id}
                    isUnderlined
                  />
                );
              }
              return null;
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
            text={search}
            handler={handleUserSearch}
          />
        </Box>
        <SimpleDialog open={open} onClose={handleClose} />

        {/* TODO: change Icon Button to buttonWithIcon */}
        <Stack
          gap={2}
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          {[
            [heartIcon, "./"],
            [userIcon, "#", handleClickOpen],
            [bagIcon, "/cart"],
          ].map(([icon, path, action], index) => {
            return !isMobile ? (
              index !== 0 ? (
                <NavLink
                  key={index}
                  path={path}
                  component={
                    <ButtonWithIcon
                      icon={<img alt="icon" src={icon} />}
                      padding="0px"
                      action={action}
                    />
                  }
                />
              ) : (
                <IconButton sx={{ padding: "0px" }} onClick={handleFavClick}>
                  <img alt="icon" src={icon} />
                </IconButton>
              )
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
      <Favourites favourites={favourites} />
    </Container>
  );
};

export default Header;
