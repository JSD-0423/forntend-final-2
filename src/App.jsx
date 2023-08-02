import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import LayOut from "./routers/main-router";
import { useState } from "react";
import AuthContext from "./contexts/auth-context";
import FavouritesContext from "./contexts/favourite-context";

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("auth") || "");

  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <FavouritesContext.Provider value={{ anchorEl, setAnchorEl }}>
          <LayOut />
        </FavouritesContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
