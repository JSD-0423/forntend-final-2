import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledLink = styled(Link)(({ theme, isunderlined, isRemove }) => ({
  color: isRemove ? theme.palette.error.main : theme.palette.primary.main,
  textDecoration: isunderlined === "true" ? "underline" : "none",
}));

export default StyledLink;
