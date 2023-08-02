import {
  Container,
  Box,
  Pagination,
  Stack,
  PaginationItem,
  Typography,
} from "@mui/material";
import GridWithPagination from "./grid-with-pagination";
import BasicAccordion from "./basic-accordion";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../themes/theme";
import { useState } from "react";
import PlainSlide from "../../components/plain-slide";
import categoryHero from "../../assets/images/category-hero.png";
import useAxiosGet from "../../utils/use-axios-get";
import { useLocation } from "react-router-dom";
const PaginationNextButton = () => {
  return <div>Next</div>;
};
const Category = () => {
  // pagination pages
  const [page, setPage] = useState(1);
  const handlePaginationChange = (e, pageNum) => {
    setPage(pageNum);
  };
  const numberOfCardsPerPage = 20;

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { search } = useLocation();
  const searchFiltered = search.replace("?", "");

  //filterd data
  const { data, loading, error } = useAxiosGet(
    `/products?page=${page}&${searchFiltered}`
  );

  return (
    <Container
      maxWidth="100%"
      sx={{
        display: "flex",
        gap: 4,
        flexDirection: "column",
        paddingBottom: "70px",
      }}
    >
      <Stack>
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
              fontSize={{ xs: "20px", sm: "35px", md: "50px", lg: "72px" }}
              fontWeight="700"
              lineHeight={{ sm: "50px", lg: "87.14px" }}
            >
              UPTO 70% OFF
            </Typography>

            <Typography
              sx={{ color: "#13101E" }}
              fontSize={{ xs: "20px", sm: "35px", md: "50px", lg: "72px" }}
              fontWeight="400"
              lineHeight={{ sm: "50px", lg: "87.14px" }}
            >
              BLACK FRIDAY
            </Typography>
          </Box>
        </PlainSlide>
      </Stack>
      <Stack direction={"row"} gap={4}>
        <Box display={isMobile ? "none" : "flex"} flex={"1 90px"}>
          <BasicAccordion />
        </Box>

        <Stack flex={"5"} direction={"column"} gap={3}>
          <GridWithPagination
            loading={loading}
            error={error}
            pageNum={page}
            numberOfCardsPerPage={numberOfCardsPerPage}
            data={data?.products}
          />

          <Pagination
            sx={{
              backgroundColor: "rgb(243, 246, 249)",
              width: "fit-content",
              borderRadius: "12px",
              padding: "4px 7px 4px 7px",
            }}
            count={Math.ceil(data?.pagination?.total / numberOfCardsPerPage)}
            onChange={handlePaginationChange}
            // hidePrevButton
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
      </Stack>
    </Container>
  );
};

export default Category;
