import { IconButton, Button } from "@mui/material";

const ButtonWithIcon = ({
  icon = "",
  text = "",
  type = "text",
  isIconStart = true,
  action,
  padding = "10px",
  fullWidth = false,
}) => {
  // type can be text, outlined, or contained
  if (!text)
    return (
      <IconButton
        sx={{ padding: padding }}
        onClick={() => {
          action?.();
        }}
      >
        {icon}
      </IconButton>
    );
  else
    return isIconStart ? (
      <Button
        fullWidth={fullWidth}
        sx={{ padding: padding }}
        onClick={() => {
          action?.();
        }}
        variant={type}
        startIcon={icon}
      >
        {text}
      </Button>
    ) : (
      <Button
        fullWidth={fullWidth}
        sx={{ padding: padding }}
        onClick={() => {
          action?.();
        }}
        variant={type}
        endIcon={icon}
      >
        {text}
      </Button>
    );
};

export default ButtonWithIcon;
