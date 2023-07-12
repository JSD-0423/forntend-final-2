import { Link } from "react-router-dom";

const ActionLink = ({ action, component, isUnderLined = false }) => {
  // isRemove indicates if the link is used for deleting something
  return (
    <Link
      onClick={() => {
        action();
      }}
      style={{ textDecoration: isUnderLined ? "underline" : "none" }}
    >
      {component}
    </Link>
  );
};

export default ActionLink;
