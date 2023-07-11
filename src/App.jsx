import Header from "./components/header";
import { Stack, ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import ButtonWithIcon from "./components/buttons/button-with-Icon";
import { AiOutlineShoppingCart } from "react-icons/ai";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ButtonWithIcon
          type={"contained"}
          icon={<AiOutlineShoppingCart />}
          isIconStart={false}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
