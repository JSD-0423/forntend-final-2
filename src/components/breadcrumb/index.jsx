import { Container, Stack, Typography, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavLink from "../links/nav-link";
import React from "react";

const Breadcrumb = ({ paths }) => {
  return (
    <Container>
      <Stack
        sx={{ paddingBottom: 1 }}
        alignItems={"center"}
        direction={"row"}
        gap={1}
      >
        <Typography color={"primary"}>Home</Typography>
        {paths.map((path, index) => {
          return (
            <React.Fragment key={index}>
              <Box alignItems={"center"} display={"flex"} fontSize={"12px"}>
                <ArrowForwardIosIcon
                  key={index + 0.5}
                  color="highEmphasis"
                  fontSize="inherit"
                />
              </Box>
              <NavLink
                key={index + 1}
                component={<Typography color={"primary"}>{path}</Typography>}
              />
            </React.Fragment>
          );
        })}
      </Stack>
    </Container>
  );
};

export default Breadcrumb;
