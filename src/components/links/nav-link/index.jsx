import StyledLink from "../styles";

const NavLink = ({ path = "/", component, isUnderlined = false }) => {
  return (
    <StyledLink to={path} isUnderlined={isUnderlined}>
      {component}
    </StyledLink>
  );
};

export default NavLink;
