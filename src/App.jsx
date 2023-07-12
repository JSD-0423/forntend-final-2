import Header from "./components/header";
import { Stack, ThemeProvider, Typography } from "@mui/material";
import theme from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import NavLink from "./components/links/nav-link";

import { AiOutlineShoppingCart } from "react-icons/ai";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavLink
          path={"www.facebook.com"}
          isUnderLined={true}
          component={
            <Typography color="error" variant="h2">
              Brands
            </Typography>
          }
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
