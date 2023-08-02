import CartTable from "./cart-table";
import { Container, Typography, Stack, Box, Button } from "@mui/material";
import OrderDetails from "../../components/order-details";
import theme from "../../themes/theme";
import useAxiosGet from "../../utils/use-axios-get";
import axiosProductionInstance from "../../utils/axios-instances";
import AuthContext from "../../contexts/auth-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { data: cartData, forceUpdate } = useAxiosGet("/carts", "get", true);
  const navigate = useNavigate();

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
          display: "flex",
          flexDirection: "column",
          gap: 5,
          [theme.breakpoints.down("800")]: {
            width: "100%",
            marginTop: "20px",
          },
        }}
      >
        <OrderDetails
          grandTotal={cartData?.cart?.[0]?.["total_cost"]}
          discount={cartData?.cart?.[0]?.discount}
          deliveryFee={12}
        />
        <Stack justifyContent={"space-between"} gap={3} direction={"row"}>
          <Button
            sx={{ width: "50%", fontSize: "13px", padding: "5px" }}
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            Place Order
          </Button>
          <Button
            sx={{ width: "50%", fontSize: "13px", padding: "5px" }}
            variant="outlined"
            onClick={() => {
              navigate("/category");
            }}
          >
            Contonue Shopping
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default CartPage;
