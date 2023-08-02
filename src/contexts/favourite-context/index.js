import { createContext } from "react";

const FavouritesContext = createContext({
  setAnchorEl: () => {},
  anchorEl: null,
});

export default FavouritesContext;
