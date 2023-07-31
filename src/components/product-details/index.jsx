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
  Snackbar,
} from "@mui/material";
import FullPriceDetails from "../price/full-price-details";
import ButtonWithIcon from "../buttons/button-with-Icon";
import cartIcon from "../../assets/icons/bag-white.svg";
import favIcon from "../../assets/icons/wishlist-blue.svg";
import FinalPrice from "../price/final-price";
import axiosProductionInstance from "../../utils/axios-instances";
import AuthContext from "../../contexts/auth-context";
import { useContext } from "react";
import Alert from "@mui/material/Alert";

const ProductDetails = ({ productData }) => {
  const [counter, setCounter] = useState(1);
  const { auth } = useContext(AuthContext);
  const [snackBarState, setSnackBarState] = useState(false);
  const [addToCartMessage, setAddToCartMessage] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarState(false);
  };

  const handleAddToCart = async () => {
    let response;
    try {
      response = await axiosProductionInstance.request({
        url: `/carts/${productData.id}?quantity=${counter}`,
        headers: {
          Authorization: `Bearer ${auth}`,
        },
        method: "post",
      });
      setAddToCartMessage(true);
    } catch (err) {
      setAddToCartMessage(false);
    } finally {
      setSnackBarState(true);
      setCounter(1);
    }
  };
  const increaseCounter = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <Snackbar
        open={snackBarState}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        {addToCartMessage ? (
          <Alert severity="success">Product added to cart successfully</Alert>
        ) : (
          <Alert severity="error">Failed to add to cart</Alert>
        )}
      </Snackbar>
      <Grid item xs={12} md={6}>
        <Grid container direction={"column"} gap={3}>
          <Box>
            <Typography variant="h3" sx={{ fontSize: "34px" }} fontWeight="600">
              {productData?.title}
            </Typography>
            <Typography fontSize={"20px"}>
              {productData?.description}
            </Typography>
          </Box>
          {productData?.rate ? (
            <Rating
              name="text-feedback"
              value={productData?.rate}
              readOnly
              precision={0.5}
              sx={{ color: "#FF8C4B" }}
            />
          ) : null}
          {productData?.discount ? (
            <FullPriceDetails
              fontSize={{
                priceFont: "40px",
                discountFont: "36px",
                percentageFont: "20px",
              }}
              price={productData?.price}
              discount={productData?.discount}
            />
          ) : (
            <FinalPrice price={productData?.price} fontSize="40px" />
          )}
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
                action={handleAddToCart}
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
    </>
  );
};

export default ProductDetails;
