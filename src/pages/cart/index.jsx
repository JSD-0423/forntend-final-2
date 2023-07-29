import CartTable from "./cart-table";
import { Container, Typography, Stack, Box } from "@mui/material";
import OrderSummery from "../../components/order-summery";
import theme from "../../themes/theme";
import useAxios from "../../utils/use-axios";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartData] = useAxios("/carts", "get", true);
  console.log(cartData);

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
        <CartTable productsData={cartData?.cart?.[0]?.products} />
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
