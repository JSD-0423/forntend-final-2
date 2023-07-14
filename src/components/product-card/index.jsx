import { Box, IconButton, Typography, Stack } from "@mui/material";
import heartIcon from "../../assets/icons/heart-black.svg";
import heartIconFilled from "../../assets/icons/heart-black-filled.svg";
import NavLink from "../links/nav-link";
import theme from "../../themes/theme";
import RatingStars from "../rating-stars";

const ProductCard = ({
  data,
  isInFavourites = false,
  price,
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
              backgroundImage: `url('${data?.image}')`,
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
          <Typography>{data?.name}</Typography>

          <IconButton
            onClick={() => {
              favouritesAction?.();
            }}
          >
            {isInFavourites ? (
              <img src={heartIconFilled} alt="heart icon" />
            ) : (
              <img src={heartIcon} alt="heart icon" />
            )}
          </IconButton>
        </Stack>
        {data.rating ? <RatingStars rating={data?.rating} /> : null}
        <Typography color={"grey"}>{data?.category}</Typography>
        <Box>{price}</Box>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
