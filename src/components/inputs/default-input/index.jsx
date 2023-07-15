import { InputAdornment } from "@mui/material";
import StyledTextField from "../styles";
import { TextField } from "@mui/material";

const DefaultInput = ({
  adorment = null,
  placeholder = "place holder",
  isAdormentStart = true,
  text = "",
  type,
  size = "1rem",
  handler,
}) => {
  // {type} prop can be: "filled", "outlined", or "standard"
  // {isAdormentStart} prop is a boolen that shows if the adorment displays at start or end of input
  // provide size with "rem" unit
  // provide adorment size seperatly on it

  return (
    <StyledTextField
      fullWidth
      variant={type}
      value={text}
      placeholder={placeholder}
      size={size}
      // onChange={(e) => {
      //   handler(e);
      // }}
      InputProps={{
        startAdornment:
          adorment && isAdormentStart ? (
            <InputAdornment position={"start"}>{adorment}</InputAdornment>
          ) : null,
        endAdornment:
          adorment && !isAdormentStart ? (
            <InputAdornment position={"start"}>{adorment}</InputAdornment>
          ) : null,
      }}
    />
  );
};

export default DefaultInput;
