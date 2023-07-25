import ProductCard from "../../../components/product-card";
import { Stack,Typography } from "@mui/material";
import theme from "../../../themes/theme";
import CircularProgress from '@mui/material/CircularProgress';

const GridWithPagination = ({loading,error, data, pageNum, numberOfCardsPerPage }) => {
  if(loading){
    return <Stack justifyContent={"center"} alignItems={"center"}>
      <CircularProgress size={"100px"}/>
    </Stack>
  }
  if(error){
    return <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography>products loading failed</Typography>
    </Stack>
  }
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(286px, 1fr))",
        columnGap: "32px",
        rowGap: "68px",
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
          rowGap: "25px",
          columnGap: "22px",
        },
      }}
    >
      {data?.map((cardData, index) => {
        if (
          numberOfCardsPerPage * (pageNum - 1) <= index &&
          index < numberOfCardsPerPage * pageNum
        ) {
          return <ProductCard onSale key={index} data={cardData} />;
        }
        return null
      })}
      
    </Stack>
  );
};

export default GridWithPagination;
