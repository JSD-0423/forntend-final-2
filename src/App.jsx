import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Home from "./pages/home";
import HeroSection from "./components/hero-section";
import Header from "./components/header"
import Banner from "./pages/home/banner-section"
import NewArrivalsSection from "./pages/home/new-arrivals-section";
import BrandsSection from "./pages/home/brands-section";


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* <Header /> */}
        <HeroSection/>
        <NewArrivalsSection/>
        <BrandsSection/>
        <Banner/>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
