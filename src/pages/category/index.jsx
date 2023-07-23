import { Container, Box } from "@mui/material";
import GridWithPagination from "./grid-with-pagination";
import BasicAccordion from "./basic-accordion";

const Category = () => {
  const data = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      image: "images/purse.png",
      name: "Grande",
      category: "Blossom Pouch",
      price: 39.9,
      rating: 4.5,
    });
  }

  return (
    <Container
      maxWidth="100%"
      sx={{ display: "flex", gap: 4, paddingBottom: "70px" }}
    >
      <Box flex={"1 90px"}>
        <BasicAccordion />
      </Box>
      <Box flex={"5"}>
        <GridWithPagination data={data} />
      </Box>
    </Container>
  );
};

export default Category;
