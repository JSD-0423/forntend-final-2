import { Link } from "@mui/material";

const PrimaryTextLink = ({ text = "primariy", path }) => {
  return <Link color="primary">{text}</Link>;
};

export default PrimaryTextLink;
