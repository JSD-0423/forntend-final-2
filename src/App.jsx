import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Footer from "./components/footer";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Home />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
