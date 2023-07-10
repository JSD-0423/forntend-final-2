import { TextField, InputAdornment } from "@mui/material";

const IconInput = ({
  icon = null,
  placeHolder = "place holder",
  isIconStart = true,
  text = "",
  type,
  isStart,
  handler,
}) => {
  // {type} prop can be: "filled", "outlined", or "standard"
  // {isStart} prop is a boolen that shows if the icon displays at start or end of input

  return (
    <TextField
      fullWidth
      variant={"filled"}
      value={text}
      label={placeHolder}
      //   onChange={(e) => {
      //     handler(e);
      //   }}
      InputProps={{
        startAdornment: (
          <InputAdornment position={isIconStart ? "start" : "end"}>
            {icon}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default FilledIconInput;
