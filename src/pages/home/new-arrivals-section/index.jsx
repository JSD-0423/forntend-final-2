import FinalPrice from "../../../components/price/final-price";
import ProductCard from "../../../components/product-card";
import purse from "../../../assets/images/purse.png";
import { Box, Container, Typography, Stack } from "@mui/material";
import HorizontalScrollSection from "../../../components/horizontal-scroll-section";
import theme from "../../../themes/theme";

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
      <HorizontalScrollSection
        gap={5}
        direction="row"
        justifyContent="space-between"
        overflow={"scroll"}
      >
        {[1, 2, 3, 4].map((value) => {
          return (
            <Box
              key={value}
              sx={{
                minWidth: "286px",
                flexGrow: "1",
                [theme.breakpoints.down("sm")]: {
                  minWidth: "136px",
                },
              }}
            >
              <ProductCard
                image={purse}
                name="Grande"
                price={<FinalPrice price={"$39.49"} />}
                category={"Blossom Pouch"}
              />
            </Box>
          );
        })}
      </HorizontalScrollSection>
    </Stack>
  );
};

export default NewArrivalsSection;
