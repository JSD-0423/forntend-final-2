import { Stack, Typography } from "@mui/material";
import ProductWithTitle from "../../../components/product-with-title";
import theme from "../../../themes/theme";
import NavLink from "../../../components/links/nav-link";

const HandPickedSection = () => {
  return (
    <Stack
      sx={{
        paddingBottom: "42px",
        paddingTop: "32px",
        gap: 3,
        [theme.breakpoints.down("sm")]: {
          gap: 1,
        },
        backgroundColor: theme.palette.primary.main,
      }}
      component={"section"}
      direction={"column"}
    >
      <Typography color="bright.main" variant="h2">
        Handpicked Collections
      </Typography>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          rowGap: "40px",
          columnGap: "24px",
          alignItems: "center",
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(auto-fit,minmax(156px,1fr))",
            columnGap: "16px",
            rowGap: "16px",
          },
        }}
      >
        {[1, 2, 3, 4].map((value) => {
          return (
            <NavLink
              key={value}
              component={
                <ProductWithTitle
                  image="images/laura.png"
                  title={"Personal Care"}
                />
              }
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default HandPickedSection;
