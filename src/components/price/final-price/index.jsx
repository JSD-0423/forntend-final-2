import { Typography } from "@mui/material";

const FinalPrice = ({ price }) => {
  return (
    <Typography sx={{ weight: 500 }} color={"highEmphasis"}>
      {price}
    </Typography>
  );
};

export default FinalPrice;
