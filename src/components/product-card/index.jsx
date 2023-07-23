import { Box, Typography, Stack } from "@mui/material";
import heartIcon from "../../assets/icons/heart-black.svg";
import heartIconFilled from "../../assets/icons/heart-black-filled.svg";
import NavLink from "../links/nav-link";
import theme from "../../themes/theme";
import RatingStars from "../rating-stars";
import FinalPrice from "../price/final-price";
import ButtonWithIcon from "../buttons/button-with-Icon";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductCard = ({ data, isInFavourites = false, favouritesAction }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // The price could be on sale or not, also a rating can be added to the card
  return (
    <Stack
      width={"100%"}
      direction={"column"}
      sx={{
        gap: "9px",
        [theme.breakpoints.down("sm")]: {
          gap: 1,
        },
      }}
    >
      <NavLink
        path="./product"
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

      <Stack
        direction={"row"}
        alignItems={"start"}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          gap={1}
          sx={{
            [theme.breakpoints.down("sm")]: {
              gap: 0.4,
            },
          }}
        >
          <Typography variant="body2">{data?.name}</Typography>

          {data.rating ? <RatingStars rating={data?.rating} /> : null}
          <Typography
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.75rem",
              },
            }}
            color={"grey"}
          >
            {data?.category}
          </Typography>
          <Box>
            <FinalPrice
              fontWeight={isMobile ? "600" : "500"}
              fontSize={isMobile ? "0.9rem" : "1rem"}
              price={data.price}
            />
          </Box>
        </Stack>

        <Box sx={{ margin: "-4px -7px 0 0" }}>
          <ButtonWithIcon
            onClick={() => {
              favouritesAction?.();
            }}
            icon={
              isInFavourites ? (
                <img src={heartIconFilled} alt="heart icon" />
              ) : (
                <img src={heartIcon} alt="heart icon" />
              )
            }
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
