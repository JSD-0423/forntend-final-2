import ProductCarousel from "../../components/proudct-carousel";
import ProductDetails from "../../components/product-details";
import TabsSection from "./tabs-section";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import useAxiosGet from "../../utils/use-axios-get";
import Loader from "../../components/loader";
import Error from "../../components/error";

const Product = () => {
  const { id } = useParams();
  const { data, loading, error } = useAxiosGet(`/products/${id}`);

  if (loading) {
    return <Loader height="100vh" />;
  }
  if (error) {
    return <Error height="100vh" />;
  }
  return (
    <Container maxWidth="100%">
      <Grid container spacing={3} marginBottom="55px">
        <ProductCarousel productData={data?.product} />
        <ProductDetails productData={data?.product} />
      </Grid>
      <TabsSection productData={data?.product} />
    </Container>
  );
};

export default Product;
