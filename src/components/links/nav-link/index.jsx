import { Link } from "react-router-dom";

const NavLink = ({ path = "/", component, isUnderLined = false }) => {
  <Link
    to={path}
    style={{ textDecoration: isUnderLined ? "underline" : "none" }}
  >
    {component}
  </Link>;
};

export default NavLink;
