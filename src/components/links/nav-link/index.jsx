import StyledLink from "../styles";

const NavLink = ({ path = "/", component, isunderlined = "false" }) => {
  // isunerlined should be passed as a boolen string i.e "false" or "true"
  return (
    <StyledLink to={path} isunderlined={isunderlined}>
      {component}
    </StyledLink>
  );
};

export default NavLink;
