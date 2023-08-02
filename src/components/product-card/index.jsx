import { Box, Typography, Stack } from "@mui/material";
import heartIcon from "../../assets/icons/heart-black.svg";
import heartIconFilled from "../../assets/icons/heart-black-filled.svg";
import NavLink from "../links/nav-link";
import theme from "../../themes/theme";
import { Rating } from "@mui/material";
import FinalPrice from "../price/final-price";
import ButtonWithIcon from "../buttons/button-with-Icon";
import useMediaQuery from "@mui/material/useMediaQuery";
import FullPriceDetails from "../price/full-price-details";

const ProductCard = ({
  data,
  rate = false,
  isInFavourites = false,
  favouritesAction,
  onSale = false,
}) => {
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
        path={`/product/${data.id}`}
        style={{ width: "100%" }}
        component={
          <Box
            sx={{
              height: "286px",
              width: "%100",
              backgroundImage: `url('${data?.productImages[0].image_url}')`,
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
          <Typography variant="body2">{data?.title}</Typography>

          <Typography
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.75rem",
              },
            }}
            color={"grey"}
          >
            {data?.category?.title}
          </Typography>

          {rate && data?.rate ? (
            <Rating
              name="half-rating-read"
              value={data?.rate}
              precision={0.5}
              readOnly
              sx={{ color: "#FF8C4B" }}
            />
          ) : null}

          {!onSale ? (
            <Box>
              <FinalPrice
                fontWeight={isMobile ? "600" : "500"}
                fontSize={isMobile ? "0.9rem" : "1rem"}
                price={data?.price}
              />
            </Box>
          ) : (
            <FullPriceDetails
              fontSize={
                isMobile
                  ? {
                      priceFont: "0.9rem",
                      discountFont: "0.63rem",
                      percentageFont: "0.63rem",
                    }
                  : {
                      priceFont: "1rem",
                      discountFont: "0.9rem",
                      percentageFont: "1rem",
                    }
              }
              price={data?.price}
              discount={data?.discount}
            />
          )}
        </Stack>

        <ButtonWithIcon
          padding="0px"
          action={() => {
            favouritesAction?.(data.id);
          }}
          icon={
            isInFavourites ? (
              <img src={heartIconFilled} alt="heart icon" />
            ) : (
              <img src={heartIcon} alt="heart icon" />
            )
          }
        />
      </Stack>
    </Stack>
  );
};

export default ProductCard;
