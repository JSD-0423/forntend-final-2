import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useState } from "react";
import { StyeldTabButton } from "../../../components/buttons/styles";

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

const TabsSection = () => {
  const [currentTabValue, setCurrentTabValue] = useState("1");

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

      <TabPanel value={currentTabValue} index="1">
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
      <TabPanel value={currentTabValue} index="2">
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
      <TabPanel value={currentTabValue} index="3">
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
