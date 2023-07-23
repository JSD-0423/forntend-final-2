import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import FullPriceDetails from "../price/full-price-details";
import ButtonWithIcon from "../buttons/button-with-Icon";
import cartIcon from "../../assets/icons/bag-white.svg";
import favIcon from "../../assets/icons/wishlist-blue.svg";

const ProductDetails = () => {
  const [counter, setCounter] = useState(1);

  const increaseCounter = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter((prevCount) => prevCount - 1);
    }
  };
  return (
    <Grid item xs={12} md={6}>
      <Grid container direction={"column"} gap={3}>
        <Box>
          <Typography variant="h3" sx={{ fontSize: "34px" }} fontWeight="600">
            Coach
          </Typography>
          <Typography fontSize={"20px"}>
            Leather Coach Bag with adjustable starps.
          </Typography>
        </Box>
        <Rating
          name="half-rating-read"
          defaultValue={2.4}
          precision={0.5}
          readOnly
          sx={{ color: "#FF8C4B" }}
        />{" "}
        <FullPriceDetails
          fontSize={{
            priceFont: "40px",
            discountFont: "36px",
            percentageFont: "20px",
          }}
          price={50}
          discount={0.5}
        />
        <Divider />
        <Stack direction={"row"} gap={2} alignItems="center">
          <Typography color="#13101E" fontWeight={"600"}>
            Quantity:
          </Typography>
          <Stack
            direction={"row"}
            border="1px solid"
            justifyContent={"center"}
            alignItems="center"
            borderRadius={"4px"}
            borderColor="primary.main"
          >
            <Button
              sx={{ padding: "0", minWidth: "24px" }}
              onClick={decreaseCounter}
              color="highEmphasis"
            >
              -
            </Button>
            <Typography color="highEmphasis.main" fontSize={"14px"}>
              {counter}
            </Typography>
            <Button
              sx={{ padding: "0", minWidth: "24px" }}
              fontSize="24px"
              onClick={increaseCounter}
              color="highEmphasis"
            >
              +
            </Button>
          </Stack>
        </Stack>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={6} md={7}>
            {" "}
            <ButtonWithIcon
              icon={<img src={cartIcon} alt="icon" color="bright.main" />}
              text={
                <Typography color={"bright.main"} fontSize={"12px"}>
                  Add to Cart
                </Typography>
              }
              fullWidth={true}
              type="contained"
            />
          </Grid>
          <Grid item xs={6} md={5}>
            {" "}
            <ButtonWithIcon
              icon={<img src={favIcon} alt="icon" />}
              text={
                <Typography color={"primary.main"} fontSize={"12px"}>
                  Add To Wishlist
                </Typography>
              }
              type="outlined"
              fullWidth={true}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
