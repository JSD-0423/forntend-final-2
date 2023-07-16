import { Stack, Typography, Grid } from "@mui/material";
import BrandItem from "../../../components/brand-item";
import theme from "../../../themes/theme";
import NavLink from "../../../components/links/nav-link";

const BrandsSection = () => {
  return (
    <Stack
      sx={{
        paddingBottom: "32px",
        gap: 3,
        [theme.breakpoints.down("sm")]: {
          gap: 1,
        },
      }}
      component={"section"}
      direction={"column"}
    >
      <Typography variant="h2">Shop by Brands</Typography>
      <Stack
        sx={{
          display: "grid",

          gridTemplateColumns: "repeat(auto-fit,minmax(168px,1fr))",
          rowGap: "20px",
          columnGap: "24px",
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(auto-fit,minmax(100px,1fr))",
            columnGap: "16px",
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
    </Stack>
  );
};

export default BrandsSection;
