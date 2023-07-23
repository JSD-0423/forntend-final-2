import { Button } from "@mui/material";

const PlainButton = ({ type = "text", text, action, padding }) => {
  // type can be text, outlined, or contained

  return (
    <Button
      sx={{ padding: padding }}
      onClick={() => {
        action?.();
      }}
      variant={type}
      color="primary"
    >
      {text}
    </Button>
  );
};

export default PlainButton;
