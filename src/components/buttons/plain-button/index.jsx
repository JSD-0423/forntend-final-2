import StyledButton from "../styles";
import PlainInput from "../../inputs/plain-input";

const PlainButton = ({ type = "text", text, action }) => {
  // type can be text, outlined, or contained

  return (
    <StyledButton
      onClick={() => {
        action?.();
      }}
      variant={type}
      color="primary"
    >
      {text}
    </StyledButton>
  );
};

export default PlainButton;
