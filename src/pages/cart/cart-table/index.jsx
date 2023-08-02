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
import ProductSummery from "../../../components/product-summery";

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
                <ProductSummery product={product} />
              </TableCell>
              <DataTableCell align="right">{`$${(
                product.price *
                (1 - product.discount / 100)
              ).toFixed(2)}`}</DataTableCell>
              <DataTableCell align="right">
                {product.CartProduct.quantity}
              </DataTableCell>
              <DataTableCell sx={{ position: "relative" }} align="right">
                <Stack direction={"column"}>
                  <Typography>
                    {`$${(
                      product.price *
                      (1 - product.discount / 100) *
                      product.CartProduct.quantity
                    ).toFixed(2)}`}
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
