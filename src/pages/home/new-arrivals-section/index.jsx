import ProductCard from "../../../components/product-card";
import { Box, Container, Typography, Stack } from "@mui/material";
import HorizontalScrollSection from "../../../components/horizontal-scroll-section";
import theme from "../../../themes/theme";
import ButtonWithIcon from "../../../components/buttons/button-with-Icon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavLink from "../../../components/links/nav-link";
import useAxios from "../../../utils/use-axios";

const NewArrivalsSection = () => {

  const [data]=useAxios("https://app-68c6b164-71cf-4968-8378-502de2661021.cleverapps.io/products?page=0&type=new-arrivals")

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
          path={`/category?type=type=new-arrivals`}
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
        {data?.products?.map((CardData,index) => {
          return (
            <Box
              key={index}
              sx={{
                minWidth: "286px",
                flexGrow: "1",
                [theme.breakpoints.down("sm")]: {
                  minWidth: "136px",
                },
              }}
            >
              <ProductCard data={CardData} />
            </Box>
          );
        })}
      </HorizontalScrollSection>
    </Container>
  );
};

export default NewArrivalsSection;
