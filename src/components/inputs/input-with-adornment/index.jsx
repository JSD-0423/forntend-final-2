import { InputAdornment } from "@mui/material";
import StyledTextField from "./styles";

const InputWithAdornment = ({
  adorment = null,
  placeholder = "place holder",
  isAdormentStart = true,
  text = "",
  type,
  handler,
}) => {
  // {type} prop can be: "filled", "outlined", or "standard"
  // {isStart} prop is a boolen that shows if the adorment displays at start or end of input

  return (
    <StyledTextField
      // fullWidth
      variant={type}
      value={text}
      placeholder={placeholder}
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
      size="small"
    />
  );
};

export default InputWithAdornment;
