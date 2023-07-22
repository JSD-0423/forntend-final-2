import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import LayOut from "./routers/main-router";
import Category from "./pages/category";


function App() {
  return (
      <ThemeProvider theme={theme}>
        {/* <LayOut/> */}
        <Category/>
      </ThemeProvider>
  );
}

export default App;
