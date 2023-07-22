import { Typography } from "@mui/material";
import theme from "../../../themes/theme";

const FinalPrice = ({fontSize="1rem", price, discount=1 }) => {
  return (
    <Typography
      variant="h3"
      color={"highEmphasis"}
      fontSize={fontSize}
      fontWeight={"700"}
    >
      ${discount*price}
    </Typography>
  );
};

export default FinalPrice;
