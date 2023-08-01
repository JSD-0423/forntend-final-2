import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { StyeldTabButton } from "../../../components/buttons/styles";
import useAxios from "../../../utils/use-axios";
import ProductCard from "../../../components/product-card";
import theme from "../../../themes/theme";

const TabPanel = ({ children, index, value, ...other }) => {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ pt: 2, pb: 12 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const TabsSection = ({ productData }) => {
  const [currentTabValue, setCurrentTabValue] = useState("1");
  const { data: relatedProducts } = useAxios(
    `https://app-68c6b164-71cf-4968-8378-502de2661021.cleverapps.io/products?page=0&category=${productData?.category_id}`
  );

  const handleTabChange = (e, newValue) => {
    setCurrentTabValue(newValue);
  };

  return (
    <>
      <Box>
        <Tabs
          sx={{
            backgroundColor: "rgb(243, 246, 249)",
            border: "0",
            padding: "6px 6px 6px 10px",
            flexDirection: "column",
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
          value={currentTabValue}
          onChange={handleTabChange}
        >
          <Tab
            sx={{ width: "14.7%" }}
            component={StyeldTabButton}
            value="1"
            label="Product Description"
          />

          <Tab
            sx={{ width: "14.7%" }}
            component={StyeldTabButton}
            value="2"
            label="Related Products"
          />

          <Tab
            sx={{ width: "14.7%" }}
            component={StyeldTabButton}
            value="3"
            label="Ratings and Reviews"
          />
        </Tabs>
      </Box>

      <TabPanel
        value={currentTabValue}
        index="1"
        style={{ minHeight: "479px" }}
      >
        {productData?.description}
      </TabPanel>
      <TabPanel value={currentTabValue} index="2">
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
          {relatedProducts?.products?.map((item, index) => {
            if (index <= 3) {
              return (
                <>
                  <Box key={item.id}>
                    <ProductCard data={item} />
                  </Box>
                </>
              );
            }
            return null;
          })}
        </Stack>
      </TabPanel>
      <TabPanel
        value={currentTabValue}
        index="3"
        style={{ minHeight: "479px" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
        scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada.
        Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in
        turpis est quisque eget tristique. Dolor augue mattis duis semper
        gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat
        tincidunt quam leo tristique. Nulla enim consectetur sit et tempus,
        faucibus leo ac cras. Purus ut non eu mus volutpat. Eget est vel
        sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus
        vulputate adipiscing elementum tristique dictumst augue pellentesque.
        Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi
        vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.
      </TabPanel>
    </>
  );
};

export default TabsSection;
