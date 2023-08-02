import { Typography, Stack, Divider, Button } from "@mui/material";
import PlainButton from "../buttons/plain-button";

const OrderDetails = ({ discount, deliveryFee, grandTotal }) => {
  return (
    <Stack sx={{ width: "100%" }} direction="column">
      <Typography color={"highEmphasis"} fontSize={"20px"} fontWeight={600}>
        Order Summery
      </Typography>
      <Divider />
      <Stack sx={{ marginTop: "15px" }} gap={2} direction={"column"}>
        {[
          [
            "Sub Total",
            `$${grandTotal && discount ? grandTotal / (1 - discount) : 0}`,
          ],
          ["Discount", `%${discount ? discount : 0}`],
          ["Delivery Fee", `$${grandTotal ? deliveryFee : 0}`],
          ["Grand Total", `$${grandTotal ? grandTotal + deliveryFee : 0}`],
        ].map((value, index) => (
          <Stack key={index} justifyContent={"space-between"} direction="row">
            <Typography color="grey">{value[0]}</Typography>
            <Typography>{value[1]}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default OrderDetails;
