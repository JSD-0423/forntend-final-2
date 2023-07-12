import FinalPrice from "../../../components/price/final-price";
import ProductCard from "../../../components/product-card";
import purse from "../../../assets/images/purse.png";
import { Box, Container, Typography, Stack } from "@mui/material";
import NavLink from "../../../components/links/nav-link";

const NewArrivalsSection = () => {
  return (
    <Stack
      sx={{
        paddingLeft: "20px",
        paddingBottom: "32px",
        gap: 2.5,
      }}
      component={"section"}
      direction={"column"}
    >
      <Box>
        <Typography variant="h3">New Arrivals</Typography>
      </Box>
      <Stack gap={5} direction="row" justifyContent="space-between">
        {[1, 2, 3, 4].map((value) => {
          return (
            <ProductCard
              image={purse}
              name="Grande"
              price={<FinalPrice price={"$39.49"} />}
              category={"Blossom Pouch"}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default NewArrivalsSection;
