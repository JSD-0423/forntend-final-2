import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledLink = styled(Link)(({ theme, color, isUnderlined, isRemove }) => ({
  color: isRemove ? theme.palette.error.main : theme.palette.primary.main,
  textDecoration: isUnderlined ? "underline" : "none",
}));

export default StyledLink;
