import { Box, IconButton, Typography, Stack } from "@mui/material";
import heartIcon from "../../assets/icons/heart-secondary.svg";
import NavLink from "../links/nav-link";
import theme from "../../themes/theme";

const ProductCard = ({
  name,
  category,
  price,
  rating,
  isInFavourites,
  image,
  favouritesAction,
}) => {
  // The price could be on sale or not, also a rating can be added to the card
  return (
    <Stack width={"100%"} direction={"column"} sx={{ gap: "9px" }}>
      <NavLink
        style={{ width: "100%" }}
        component={
          <Box
            sx={{
              height: "286px",
              width: "%100",
              backgroundImage: `url('${image}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",

              [theme.breakpoints.down("sm")]: {
                height: "138px",
              },
            }}
          />
        }
      />

      <Stack direction={"column"} justifyContent={"space-between"} gap={1}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography>{name}</Typography>
          <img src={heartIcon} alt="heart icon" style={{ color: "black" }} />
        </Stack>
        <Typography color={"grey"}>{category}</Typography>
        <Box>{price}</Box>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
