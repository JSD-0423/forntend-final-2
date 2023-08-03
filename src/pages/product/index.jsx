import ProductCarousel from "../../components/proudct-carousel";
import ProductDetails from "../../components/product-details";
import TabsSection from "./tabs-section";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import useAxiosGet from "../../utils/use-axios-get";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Breadcrumb from "../../components/breadcrumb";

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
    <Container>
      <Breadcrumb
        paths={{
          page: data?.product?.category?.title,
          id: data?.product?.category?.id,
        }}
        product={data?.product?.title}
      />
      <Grid container spacing={3} marginBottom="55px">
        <ProductCarousel productData={data?.product} />
        <ProductDetails productData={data?.product} />
      </Grid>
      <TabsSection productData={data?.product} />
    </Container>
  );
};

export default Product;
