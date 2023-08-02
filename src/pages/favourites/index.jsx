import { Box, Stack, Typography } from "@mui/material";
import ProductSummery from "../../components/product-summery";
import useAxiosGet from "../../utils/use-axios-get";
import { Popover } from "@mui/material";
import { useContext } from "react";
import FavouritesContext from "../../contexts/favourite-context";
import NavLink from "../../components/links/nav-link";

const Favourites = ({favourites}) => {
  const { setAnchorEl, anchorEl } = useContext(FavouritesContext);
  // const { data: favourites } = useAxiosGet("/favourites", "get", true);

  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Stack padding={"5px"} gap={1} direction={"column"}>
        {favourites?.favourites?.map((product) => {
          return (
            <NavLink
              path={`/product/${product.id}`}
              component={<ProductSummery product={product} />}
            />
          );
        })}
      </Stack>
    </Popover>
  );
};

export default Favourites;
