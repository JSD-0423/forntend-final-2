import { Typography } from "@mui/material";
import React from "react";

const Discount = ({fontSize="1rem", discount }) => {
  return (
    <Typography
      variant="h3"
      fontSize={fontSize}
      fontWeight="600"
      color={"#FF404B"}
    >
      {discount}%OFF
    </Typography>
  );
};

export default Discount;
