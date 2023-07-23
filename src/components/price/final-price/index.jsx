import { Typography } from "@mui/material";
const FinalPrice = ({
  fontSize = "1rem",
  fontWeight = "700",
  price,
  discount = 1,
}) => {
  return (
    <Typography
      variant="h3"
      color={"highEmphasis"}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      ${discount * price}
    </Typography>
  );
};

export default FinalPrice;
