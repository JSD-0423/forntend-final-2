import { Link } from "react-router-dom";
import StyledLink from "./styles";

const NavLink = ({ path = "/", component, isUnderLined = false }) => {
  return (
    <StyledLink
      to={path}
      style={{ textDecoration: isUnderLined ? "underline" : "none" }}
    >
      {component}
    </StyledLink>
  );
};

export default NavLink;
