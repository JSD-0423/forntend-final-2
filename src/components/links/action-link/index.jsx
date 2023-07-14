import StyledLink from "../styles";

const ActionLink = ({ action, component, isUnderLined = false, isRemove }) => {
  // isRemove indicates if the link is used for deleting something
  return (
    <StyledLink
      onClick={() => {
        action();
      }}
      isUnderLined={isUnderLined}
      isRemove={isRemove}
    >
      {component}
    </StyledLink>
  );
};

export default ActionLink;
