import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import LayOut from "./routers/main-router";
import { useState } from "react";
import AuthContext from "./contexts/auth-context";

function App() {
  const [auth, setAuth] = useState("");

  const [cartData, setCartData] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <LayOut />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
