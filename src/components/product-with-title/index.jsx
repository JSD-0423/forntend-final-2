import StyledBox from "./styles";
import { Typography } from "@mui/material";
import theme from "../../themes/theme";

const ProductWithTitle = ({ title = "", image }) => {
  return (
    <StyledBox
      sx={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        sx={{
          marginLeft: "16px",
          marginBottom: "16px",
          [theme.breakpoints.down("sm")]: {
            marginLeft: "10px",
            marginBottom: "10px",
            fontWeight: 500,
          },
          color: theme.palette.highEmphasis.main,
          fontSize: "1.7vw",
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
    </StyledBox>
  );
};

export default ProductWithTitle;
