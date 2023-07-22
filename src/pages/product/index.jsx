import Breadcrumb from "../../components/breadcrumb";
import TabsSection from "./tabs-section";
import { Box } from "@mui/material";

const Product = () => {
  return (
    <>
      <Box>
        <Breadcrumb paths={["Handbag", "Label"]} />
      </Box>
      <TabsSection />
    </>
  );
};

export default Product;
