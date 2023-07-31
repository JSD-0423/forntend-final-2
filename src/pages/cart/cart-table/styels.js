import { TableCell } from "@mui/material";
import styled from "@emotion/styled";
import { Padding } from "@mui/icons-material";

const DataTableCell = styled(TableCell)(({ theme }) => ({
  "&.MuiTableCell-root": {
    verticalAlign: "top",
  },
}));

export { DataTableCell };
