import React from "react";
import { Stack, Typography } from "@mui/material";
const Error = ({height}) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={height}>
      <Typography variant="h2" color={"error.main"}>products loading failed</Typography>
    </Stack>
  );
};

export default Error;
