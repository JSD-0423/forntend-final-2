import { Typography } from "@mui/material";
const FinalPrice = ({
  fontSize = "1rem",
  fontWeight = "700",
  price,
  discount = 1,
}) => {
  discount= discount?1-( discount/100 ): 1
  return (
    <Typography
      variant="h3"
      color={"highEmphasis"}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      ${
        price ? (price*discount).toFixed(2) :0
      }
    </Typography>
  );
};

export default FinalPrice;
