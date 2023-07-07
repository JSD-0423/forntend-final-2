import './App.css';
import {ThemeProvider}  from "@mui/material"
import theme from "../src/themes/theme"
import Footer from './components/footer';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
