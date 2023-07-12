import FinalPrice from "./components/price/final-price";
import ProductCard from "./components/product-card";
import purse from "./assets/images/purse.png";
import { Box, Container, Typography } from "@mui/material";

return (
  <Container>
    <Box>
      <Typography variant="h3">New Arrivals</Typography>
    </Box>
    <Box sx={{ width: "286px" }}>
      <ProductCard
        image={purse}
        name="Grande"
        price={<FinalPrice price={"$39.49"} />}
        category={"Blossom Pouch"}
      />
    </Box>
  </Container>
);
