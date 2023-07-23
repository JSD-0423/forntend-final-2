import { Stack, Typography, Container } from "@mui/material";
import ProductWithTitle from "../../../components/product-with-title";
import theme from "../../../themes/theme";
import NavLink from "../../../components/links/nav-link";

const HandPickedSection = () => {
  return (
    <Container
      sx={{
        paddingBottom: "42px",
        paddingTop: "32px",
        gap: 3,
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
          gap: 1,
        },
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Typography color="bright.main" variant="h2">
        Handpicked Collections
      </Typography>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(156px,1fr))",
          rowGap: "40px",
          columnGap: "40px",
          justifyContent: "space-between",
          [theme.breakpoints.down("sm")]: {
            rowGap: "16px",
            columnGap: "16px",
          },
          [theme.breakpoints.down("400")]: {
            gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))",
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
    </Container>
  );
};

export default HandPickedSection;
