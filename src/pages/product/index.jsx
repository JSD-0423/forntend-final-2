import ProductCarousel from "../../components/proudct-carousel";
import ProductDetails from "../../components/product-details";
import TabsSection from "./tabs-section";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import useAxios from "../../utils/use-axios";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Product = () => {
  const { id } = useParams();
  const [product, loading, error] = useAxios(
    `https://app-68c6b164-71cf-4968-8378-502de2661021.cleverapps.io/products/${id}`
  );
  if (loading) {
    return <Loader height="100vh" />;
  }
  if (error) {
    return <Error height="100vh" />;
  }
  return (
    <Container maxWidth="100%">
      <Grid container spacing={3} marginBottom="55px">
        <ProductCarousel productData={product.product} />
        <ProductDetails productData={product.product} />
      </Grid>
      <TabsSection productData={product.product} />
    </Container>
  );
};

export default Product;
