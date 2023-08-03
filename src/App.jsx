import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import LayOut from "./routers/main-router";
import { useState } from "react";
import AuthContext from "./contexts/auth-context";
import FavouritesContext from "./contexts/favourite-context";
import BreadContext from "./contexts/breadcrumb-context";

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("auth") || "");
  const [anchorEl, setAnchorEl] = useState(null);
  const [bread, setBread] = useState([{page:"Home",path:"/"}]);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <FavouritesContext.Provider value={{ anchorEl, setAnchorEl }}>
          <BreadContext.Provider value={{ bread, setBread }}>
            <LayOut />
          </BreadContext.Provider>
        </FavouritesContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
