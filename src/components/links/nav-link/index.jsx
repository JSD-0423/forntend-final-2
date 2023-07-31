import StyledLink from "../styles";

const NavLink = ({ path = "/", component, isUnderLined = "false" }) => {
  // isunerlined should be passed as a boolen string i.e "false" or "true"
  return (
    <StyledLink to={path} isunderlined={isUnderLined}>
      {component}
    </StyledLink>
  );
};

export default NavLink;
