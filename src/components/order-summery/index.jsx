import { Typography, Stack, Divider, Button } from "@mui/material";
import PlainButton from "../buttons/plain-button";

const OrderSummery = ({ orderData }) => {
  return (
    <Stack sx={{ width: "100%" }} direction="column">
      <Typography color={"highEmphasis"} fontSize={"20px"} fontWeight={600}>
        Order Summery
      </Typography>
      <Divider />
      <Stack sx={{ marginTop: "15px" }} gap={2} direction={"column"}>
        {[
          ["Sub Total", "$119"],
          ["Discount", "$119"],
          ["Delivery Fee", "$119"],
          ["Grand Total", "$119"],
        ].map((value, index) => (
          <Stack key={index} justifyContent={"space-between"} direction="row">
            <Typography color="grey">{value[0]}</Typography>
            <Typography>{value[1]}</Typography>
          </Stack>
        ))}
        <Stack justifyContent={"space-between"} gap={3} direction={"row"}>
          <Button
            sx={{ width: "50%", fontSize: "13px", padding: "5px" }}
            variant="contained"
          >
            Place Order
          </Button>
          <Button
            sx={{ width: "50%", fontSize: "13px", padding: "5px" }}
            variant="outlined"
          >
            Contonue Shopping
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OrderSummery;
