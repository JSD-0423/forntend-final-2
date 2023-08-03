import { Container, Stack, Typography, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavLink from "../links/nav-link";
import React from "react";

const Breadcrumb = ({ paths, product }) => {
  return (
    <Container style={{ padding: 0, margin: 0, position: "relative" }}>
      <Stack
        sx={{ paddingBottom: 1 }}
        alignItems={"center"}
        direction={"row"}
        gap={1}
      >
        {" "}
        <NavLink
          path="/"
          component={<Typography color={"primary"}>Home</Typography>}
        />
        {product ? (
          <>
            <Box alignItems={"center"} display={"flex"} fontSize={"12px"}>
              <ArrowForwardIosIcon color="highEmphasis" fontSize="inherit" />
            </Box>
            <NavLink
              path={`/category?category=${paths.id}`}
              component={
                <Typography color={"primary.main"}>{paths.page}</Typography>
              }
            />
            <Box alignItems={"center"} display={"flex"} fontSize={"12px"}>
              <ArrowForwardIosIcon color="highEmphasis" fontSize="inherit" />
            </Box>
            <Typography color={"lowEmphasis"}>{product}</Typography>
          </>
        ) : (
          <>
            {" "}
            <Box alignItems={"center"} display={"flex"} fontSize={"12px"}>
              <ArrowForwardIosIcon color="highEmphasis" fontSize="inherit" />
            </Box>
            <Typography color={"lowEmphasis"}>{paths.page}</Typography>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default Breadcrumb;
