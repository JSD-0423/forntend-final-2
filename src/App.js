import './App.css';
import {ThemeProvider}  from "@mui/material"
import theme from "../src/themes/theme"
import Footer from './components/footer';
import PlainSlide from './components/plain-slide';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <PlainSlide/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
