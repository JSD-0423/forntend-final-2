import FinalPrice from "../../../components/price/final-price";
import ProductCard from "../../../components/product-card";
import { Box, Container, Typography, Stack } from "@mui/material";
import HorizontalScrollSection from "../../../components/horizontal-scroll-section";
import theme from "../../../themes/theme";
import ButtonWithIcon from "../../../components/buttons/button-with-Icon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavLink from "../../../components/links/nav-link";

const NewArrivalsSection = () => {
  const data = {
    image: "images/purse.png",
    name: "Grande",
    category: "Blossom Pouch",
    price: "$39.49",
  };

  return (
    <Container
      sx={{
        paddingBottom: "32px",
        gap: 3,
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
          gap: 1,
        },
      }}
      component={"section"}
    >
      <Stack
        justifyContent={"space-between"}
        sx={{
          [theme.breakpoints.down("sm")]: {
            alignItems: "center",
          },
        }}
        direction={"row"}
      >
        <Typography variant="h2">New Arrivals</Typography>
        <NavLink
          component={
            <ButtonWithIcon
              isIconStart={false}
              type={"text"}
              text={"View All"}
              icon={
                <ArrowForwardIosIcon fontSize="20px" color={"highEmphasis"} />
              }
            />
          }
        />
      </Stack>
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
                data={data}
                price={<FinalPrice price={data.price} />}
              />
            </Box>
          );
        })}
      </HorizontalScrollSection>
    </Container>
  );
};

export default NewArrivalsSection;
