import Header from "./components/header";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import FinalPrice from "./components/price/final-price";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <FinalPrice price={"$45"} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
