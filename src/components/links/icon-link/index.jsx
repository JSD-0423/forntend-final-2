import { Link } from "@mui/material";

const IconLink = (icon, path, component) => {
  return (
    <Link to={path} component={component}>
      {icon}
    </Link>
  );
};

export default IconLink;
