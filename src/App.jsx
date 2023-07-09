import Header from "./components/header";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import FinalPrice from "./components/price/final-price";
import ProductCard from "./components/product-card";
import purse from "./assets/images/purse.png";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "286px" }}>
          <ProductCard
            image={purse}
            name="Grande"
            price={<FinalPrice price={"$39.49"} />}
            category={"Blossom Pouch"}
          />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
