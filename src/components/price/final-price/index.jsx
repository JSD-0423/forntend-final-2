import { Typography } from "@mui/material";
import theme from "../../../themes/theme";

const FinalPrice = ({ price }) => {
  return (
    <Typography
      variant="body2"
      sx={{
        [theme.breakpoints.down("sm")]: {
          fontSize: "1rem",
        },
      }}
      color={"highEmphasis"}
    >
      {price}
    </Typography>
  );
};

export default FinalPrice;
