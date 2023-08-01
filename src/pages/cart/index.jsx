import CartTable from "./cart-table";
import { Container, Typography, Stack, Box } from "@mui/material";
import OrderSummery from "../../components/order-summery";
import theme from "../../themes/theme";
import useAxios from "../../utils/use-axios";
import axiosProductionInstance from "../../utils/axios-instances";
import AuthContext from "../../contexts/auth-context";
import { useContext } from "react";

const CartPage = () => {
  const { data: cartData, forceUpdate } = useAxios("/carts", "get", true);

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
      forceUpdate((prev) => !prev);
    } catch (err) {}
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
          grandTotal={cartData?.cart?.[0]?.["total_cost"]}
          discount={cartData?.cart?.[0]?.discount}
          deliveryFee={12}
        />
      </Box>
    </Container>
  );
};

export default CartPage;
