import { Typography } from "@mui/material";
import React from "react";

const PreviousPrice = ({fontSize="1rem", previousPrice }) => {
  return (
    <Typography
      variant="h3"
      color={"lightText.main"}
      fontWeight="600"
      fontSize={fontSize}
      sx={{ textDecoration: "line-through" }}
    >
      ${previousPrice}
    </Typography>
  );
};

export default PreviousPrice;
