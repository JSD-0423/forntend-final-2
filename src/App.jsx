import Header from "./components/header";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer';
import Banner from "./pages/home/banner-section";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Banner/>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
