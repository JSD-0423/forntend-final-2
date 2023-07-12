import Header from "./components/header";
import { Stack, ThemeProvider, Typography, Button } from "@mui/material";
import theme from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import DefaultInput from "./components/inputs/default-input";
import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Stack sx={{ width: "50%", marginLeft: "25%", marginTop: "300px" }}>
          <DefaultInput
            adorment={<FiSearch size={20} color={theme.palette.error.main} />}
            size={"1.2rem"}
            type={"filled"}
            placeholder="Holder"
            text="hello"
          />
          <Typography>hello</Typography>
          <Button>hello</Button>
        </Stack>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
