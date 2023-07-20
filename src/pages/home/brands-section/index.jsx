import { Stack, Typography, Container } from "@mui/material";
import BrandItem from "../../../components/brand-item";
import theme from "../../../themes/theme";
import NavLink from "../../../components/links/nav-link";

const BrandsSection = () => {
  return (
    <Container
      sx={{
        paddingBottom: "67px",
        paddingTop: "67px",
        gap: 3,
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
          gap: 1,
        },
      }}
    >
      <Typography variant="h2">Shop by Brands</Typography>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(168px,1fr))",
          rowGap: "46px",
          columnGap: "46px",
          justifyContent: "space-between",
          [theme.breakpoints.down("sm")]: {
            rowGap: "24px",
            columnGap: "16px",
          },
          [theme.breakpoints.down("400")]: {
            gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))",
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((value) => {
          return (
            <NavLink
              key={value}
              component={<BrandItem image="images/brand.png" />}
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default BrandsSection;
