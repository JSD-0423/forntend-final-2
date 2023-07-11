import Header from "./components/header";
import { Stack, ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import PlainInput from "./components/inputs/plain-input";
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Stack sx={{ width: "50%", marginLeft: "25%", marginTop: "300px" }}>
          <PlainInput type={"filled"} />
        </Stack>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
