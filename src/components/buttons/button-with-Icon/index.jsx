import { IconButton, Typography } from "@mui/material";
import StyledButton from "../styles";

const ButtonWithIcon = ({
  icon = "",
  text = "",
  type = "text",
  isIconStart = true,
  action,
}) => {
  // type can be text, outlined, or contained
  if (!text)
    return (
      <IconButton
      //   onClick={() => {action();}}
      >
        {icon}
      </IconButton>
    );
  else
    return isIconStart ? (
      <StyledButton
        //   onClick={() => {action();}}
        variant={type}
        startIcon={icon}
      >
        {text}
      </StyledButton>
    ) : (
      <StyledButton
        //   onClick={() => {action();}}
        variant={type}
        endIcon={icon}
      >
        {text}
      </StyledButton>
    );
};

export default ButtonWithIcon;
