import ProductCard from "../../../components/product-card";
import { Stack, Typography } from "@mui/material";
import theme from "../../../themes/theme";
import Loader from "../../../components/loader";
import Error from "../../../components/error";

const GridWithPagination = ({ loading, error, data }) => {
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  if (!data?.length) {
    return (
      <Stack height={"70vh"} justifyContent="center" alignItems={"center"}>
        <Typography variant="h2" color={"primary.main"}>
          No Products Found
        </Typography>
      </Stack>
    );
  }
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(286px, 1fr))",
        columnGap: "32px",
        rowGap: "68px",
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
          rowGap: "25px",
          columnGap: "22px",
        },
      }}
    >
      {data?.map((cardData, index) => {
        return (
          <ProductCard
            rate={true}
            onSale={cardData?.discount}
            key={index}
            data={cardData}
          />
        );
      })}
    </Stack>
  );
};

export default GridWithPagination;
