import ProductCarousel from "../../components/proudct-carousel";
import ProductDetails from "../../components/product-details"
import TabsSection from "./tabs-section";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useAxios from "../../utils/use-axios";
import CircularProgress from '@mui/material/CircularProgress';

const Product = () => {
  const {id} =useParams()
  const [product,loading,error]=useAxios(`https://app-68c6b164-71cf-4968-8378-502de2661021.cleverapps.io/products/${id}`)
  if(loading){
    return <Stack justifyContent={"center"} alignItems={"center"}>
      <CircularProgress size={"100px"}/>
    </Stack>
  }
  if(error){
    return <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography>products loading failed</Typography>
    </Stack>
  }
  return <Container maxWidth="100%">
    <Grid container spacing={3} marginBottom="55px">
    <ProductCarousel productData={product.product}/>
    <ProductDetails productData={product.product} />
    </Grid>
    <TabsSection productData={product.product}/>
  </Container>;
};

export default Product;
