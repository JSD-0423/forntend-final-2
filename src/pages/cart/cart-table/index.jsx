import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, Typography } from "@mui/material";

const CartTable = ({ productsData }) => {
  return (
    <TableContainer sx={{ boxShadow: "0", width: "100%" }} component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {["Product Name", "Price", "Qty", "Subtotal"].map((text, index) => (
              <TableCell key={index} sx={{ color: "grey" }}>
                {text}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {productsData.map((product) => (
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack gap={1} alignItems={"center"} direction={"row"}>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "7px",
                    }}
                    src={product.image}
                  />

                  <Stack
                    justifyContent={"space-between"}
                    sx={{ height: "100px" }}
                    direction={"column"}
                  >
                    <Typography variant="body2">{product.title}</Typography>
                    <Typography color="grey">{product.category}</Typography>
                    <Typography color="grey">
                      {`Qty- ${product.quantity}`}
                    </Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align="left">{`$${product.price}`}</TableCell>
              <TableCell align="left">{product.quantity}</TableCell>
              <TableCell align="left">{`$${
                product.price * product.quantity
              }`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
