import {
  Container,
  Box,
  Pagination,
  Stack,
  PaginationItem,
  Typography
} from "@mui/material";
import GridWithPagination from "./grid-with-pagination";
import BasicAccordion from "./basic-accordion";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../themes/theme";
import { useState } from "react";
import PlainSlide from "../../components/plain-slide";
import categoryHero from "../../assets/images/herosection.png"

const PaginationNextButton = () => {
  return <div>Next</div>;
};
const Category = () => {
  // pagination pages
  const [page, setPage] = useState(1);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const data = [];

  for (let i = 0; i < 48; i++) {
    data.push({
      image: "images/purse.png",
      name: "Grande",
      category: "Blossom Pouch",
      price: 39.9,
      rating: 4.5,
    });
  }

  const handlePaginationChange = (e, pageNum) => {
    setPage(pageNum);
  };

  const numberOfCardsPerPage = 20;

  return (
    <Container
      maxWidth="100%"
      sx={{
        display: "flex",
        gap: 4,
        flexDirection: "row",
        paddingBottom: "70px",
      }}
    > 
    <PlainSlide
        image={categoryHero}
        heightPic={{ xs: "140px", sm: "200px", md: "300px", lg: "450px" }}
      >
        <Box
            spacing={2}
            sx={{
              position: "absolute",
              top: "50%",
              right: "6%",
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              sx={{ color: "#13101E" }}
              fontSize={{ xs: "20px",sm:"35px", md: "50px", lg: "72px" }}
              fontWeight="700"
              lineHeight={{sm:"50px",lg:"87.14px"}}
            >
              UPTO 70% OFF
            </Typography>
            
              <Typography
                sx={{ color: "#13101E" }}
                fontSize={{ xs: "20px",sm:"35px", md: "50px", lg: "72px" }}
                fontWeight="400"
                lineHeight={{sm:"50px",lg:"87.14px"}}
                >
                BLACK FRIDAY
              </Typography>
          </Box>
      </PlainSlide>
      <Box display={isMobile ? "none" : "flex"} flex={"1 90px"}>
        <BasicAccordion />
      </Box>

      <Stack flex={"5"} direction={"column"} gap={3}>
        <GridWithPagination
          pageNum={page}
          numberOfCardsPerPage={numberOfCardsPerPage}
          data={data}
        />

        <Pagination
          sx={{
            backgroundColor: "rgb(243, 246, 249)",
            width: "fit-content",
            borderRadius: "12px",
            padding: "4px 7px 4px 7px",
          }}
          count={Math.ceil(data.length / numberOfCardsPerPage)}
          onChange={handlePaginationChange}
          hidePrevButton
          renderItem={(item) => {
            return (
              <PaginationItem
                sx={{
                  backgroundColor: item.selected
                    ? `${theme.palette.primary.main} !important`
                    : "rgb(243, 246, 249)",
                  padding: "6px 18px 6px 18px",
                  borderRadius: "12px",
                  marginLeft: item.type === "next" ? "10px" : "-4px",
                  zIndex: item.selected ? 1 : 0,
                }}
                slots={{ next: PaginationNextButton }}
                {...item}
              />
            );
          }}
        />
      </Stack>
    </Container>
  );
};

export default Category;
