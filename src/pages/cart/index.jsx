import CartTable from "./cart-table";
import { Container, Typography, Stack, Box } from "@mui/material";
import OrderSummery from "../../components/order-summery";
import theme from "../../themes/theme";
import useAxios from "../../utils/use-axios";
import axiosProductionInstance from "../../utils/axios-instances";
import AuthContext from "../../contexts/auth-context";
import { useContext, useState } from "react";

const CartPage = () => {
  const [cartData, loading, error, setCartData] = useAxios(
    "/carts",
    "get",
    true
  );

  const { auth } = useContext(AuthContext);

  const handleRemoveFromCart = async (ProductId) => {
    try {
      const response = await axiosProductionInstance({
        method: "delete",
        url: `/carts/${ProductId}`,
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      setCartData((prevState) => {
        const newState = JSON.parse(JSON.stringify(prevState));
        newState.cart[0].products = newState.cart[0].products.filter(
          (product) => {
            return product.id !== ProductId;
          }
        );
        return newState;
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "134px",
        paddingBottom: "60px",
        [theme.breakpoints.down("800")]: {
          flexDirection: "column",
        },
      }}
    >
      <Stack flexShrink={7} flexGrow={2} gap={2} direction="column">
        <Typography color="primary" variant="h2">
          My Cart
        </Typography>
        <CartTable
          handleRemoveFromCart={handleRemoveFromCart}
          productsData={cartData?.cart?.[0]?.products}
        />
      </Stack>
      <Box
        sx={{
          marginTop: "100px",
          width: "411px",
          [theme.breakpoints.down("800")]: {
            width: "100%",
            marginTop: "20px",
          },
        }}
      >
        <OrderSummery
          orderData={{
            subTotal: "$50",
            discount: "%30",
            deliveryFee: "$40",
            grandTotal: "$120",
          }}
        />
      </Box>
    </Container>
  );
};

export default CartPage;
