import ProductCarousel from "../../components/proudct-carousel";
import ProductDetails from "../../components/product-details"
import TabsSection from "./tabs-section";
import { Container, Grid } from "@mui/material";

const Product = () => {
  return <Container maxWidth="100%">
    <Grid container spacing={3} marginBottom="55px">
    <ProductCarousel/>
    <ProductDetails/>
    </Grid>
    <TabsSection/>
  </Container>;
};

export default Product;
