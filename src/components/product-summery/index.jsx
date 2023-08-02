import { Stack, Typography } from "@mui/material";

const ProductSummery = ({ product }) => {
  console.log(product);
  return (
    <Stack gap={1} alignItems={"center"} direction={"row"}>
      <img
        style={{
          width: "75px",
          height: "80px",
          borderRadius: "7px",
          objectFit: "cover",
        }}
        src={product?.productImages?.[0]?.image_url}
      />
      <Stack
        justifyContent={"space-between"}
        sx={{ height: "80px" }}
        direction={"column"}
      >
        <Typography variant="body2">{product?.title}</Typography>
        <Typography color="grey">{product?.category?.title}</Typography>
        <Typography color="grey">
          {`Qty- ${product?.CartProduct?.quantity}`}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProductSummery;
