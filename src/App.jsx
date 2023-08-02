import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import LayOut from "./routers/main-router";
import { useState } from "react";
import AuthContext from "./contexts/auth-context";

function App() {
  const [auth, setAuth] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY5MDU3OTg3MiwiZXhwIjoxNjkzMTcxODcyfQ.53e6tdqIpaVd7hHq8A3Ti8HmOgeY_3hYxqgXnlb2oKA"
  );

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <LayOut />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
