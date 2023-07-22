import ProductCard from "../../../components/product-card";
import { Container, Stack } from "@mui/material";

const GridWithPagination = ({ data }) => {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(286px, 1fr))",
        columnGap: "32px",
        rowGap: "68px",
      }}
    >
      {data.map((cardData, index) => {
        return <ProductCard onSale key={index} data={cardData} />;
      })}
    </Stack>
  );
};

export default GridWithPagination;
