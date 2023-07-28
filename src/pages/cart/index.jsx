import CartTable from "./cart-table";
import { Container, Typography, Stack, Box } from "@mui/material";
import OrderSummery from "../../components/order-summery";
import theme from "../../themes/theme";

const CartPage = () => {
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
          productsData={[
            {
              id: 1,
              image: "images/purse.png",
              title: "Grande",
              category: "Blossom Pouch",
              price: 39.9,
              quantity: 2,
            },
            {
              id: 1,
              image: "images/purse.png",
              title: "Grande",
              category: "Blossom Pouch",
              price: 39.9,
              quantity: 2,
            },
          ]}
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
