import { TextField } from "@mui/material";

const PlainInput = ({
  placeholder = "place holder",
  text = "",
  type,
  handler,
}) => {
  // {type} prop can be: "filled", "outlined", or "standard"
  // {isStart} prop is a boolen that shows if the adorment displays at start or end of input

  return (
    <TextField
      // fullWidth
      variant={type}
      value={text}
      placeholder={placeholder}
      // onChange={(e) => {
      //   handler(e);
      // }}
      size="small"
    />
  );
};

export default PlainInput;
