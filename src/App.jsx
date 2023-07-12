import Header from "./components/header";
import { Stack, ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer';

import { AiOutlineShoppingCart } from "react-icons/ai";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
