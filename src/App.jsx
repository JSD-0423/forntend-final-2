import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import LayOut from "./routers/main-router";


function App() {
  return (
      <ThemeProvider theme={theme}>
        <LayOut/>
      </ThemeProvider>
  );
}

export default App;
