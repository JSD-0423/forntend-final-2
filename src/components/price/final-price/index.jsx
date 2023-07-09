import { Typography } from "@mui/material";

const FinalPrice = ({ price }) => {
  return (
    <Typography sx={{ fontWeight: 500 }} color={"highEmphasis"}>
      {price}
    </Typography>
  );
};

export default FinalPrice;
