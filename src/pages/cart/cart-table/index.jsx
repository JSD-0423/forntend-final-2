import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Stack, Typography } from "@mui/material";
import ActionLink from "../../../components/links/action-link";
import { DataTableCell } from "./styels";

const CartTable = ({ productsData, handleRemoveFromCart }) => {
  return (
    <TableContainer sx={{ boxShadow: "0", width: "100%" }} component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {["Product Name", "Price", "Qty", "Subtotal"].map((text, index) => (
              <TableCell
                align={index === 0 ? "left" : "right"}
                key={index}
                sx={{ color: "grey", paddingLeft: index === 0 ? 0 : "auto" }}
              >
                {text}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {productsData?.map((product) => (
            <TableRow
              key={product.id}
              sx={{
                "& td, & th": {
                  border: 0,
                },
              }}
            >
              <TableCell sx={{ paddingLeft: 0 }} component="th" scope="row">
                <Stack gap={1} alignItems={"center"} direction={"row"}>
                  <img
                    style={{
                      width: "75px",
                      height: "80px",
                      borderRadius: "7px",
                      objectFit: "cover",
                    }}
                    src={product.productImages[0].image_url}
                  />

                  <Stack
                    justifyContent={"space-between"}
                    sx={{ height: "80px" }}
                    direction={"column"}
                  >
                    <Typography variant="body2">{product.title}</Typography>
                    <Typography color="grey">
                      {product.category.title}
                    </Typography>
                    <Typography color="grey">
                      {`Qty- ${product.CartProduct.quantity}`}
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <DataTableCell align="right">{`$${product.price}`}</DataTableCell>
              <DataTableCell align="right">
                {product.CartProduct.quantity}
              </DataTableCell>
              <DataTableCell sx={{ position: "relative" }} align="right">
                <Stack direction={"column"}>
                  <Typography>
                    {`$${(product.price * product.CartProduct.quantity).toFixed(
                      2
                    )}`}
                  </Typography>
                  <Box position={"absolute"} bottom={"10px"}>
                    <ActionLink
                      action={() => {
                        handleRemoveFromCart(product.id);
                      }}
                      component={"Remove"}
                      isRemove
                      isUnderLined="true"
                    />
                  </Box>
                </Stack>
              </DataTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
