import { Stack, Typography } from "@mui/material";
import BrandItem from "../../../components/brand-item";
import theme from "../../../themes/theme";

const BrandsSection = () => {
  return (
    <Stack
      sx={{
        paddingLeft: "20px",
        paddingBottom: "32px",
        paddingRight: "20px",
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
          justifyItems: "center",
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
          return <BrandItem key={value} image="images/brand.png" />;
        })}
      </Stack>
    </Stack>
  );
};

export default BrandsSection;
