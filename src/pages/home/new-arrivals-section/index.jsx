import ProductCard from "../../../components/product-card";
import { Box, Container, Typography, Stack } from "@mui/material";
import HorizontalScrollSection from "../../../components/horizontal-scroll-section";
import theme from "../../../themes/theme";
import ButtonWithIcon from "../../../components/buttons/button-with-Icon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavLink from "../../../components/links/nav-link";
import useAxiosGet from "../../../utils/use-axios-get";
import { useContext, useEffect, useMemo } from "react";
import axiosProductionInstance from "../../../utils/axios-instances";
import AuthContext from "../../../contexts/auth-context";

const NewArrivalsSection = () => {
  const { data } = useAxiosGet("/products?page=0&type=new-arrivals");
  const { data: favouritesData, forceUpdate } = useAxiosGet(
    "/favourites",
    "get",
    true
  );
  const { auth } = useContext(AuthContext);

  const favouritesSet = useMemo(() => {
    const set = new Set();
    for (let i = 0; i < favouritesData?.favourites?.length; i++) {
      set.add(favouritesData.favourites[i].id);
    }
    return set;
  }, [favouritesData]);

  const addRemoveFormFavourites = async (ProductId) => {
    try {
      const response = await axiosProductionInstance.request({
        url: `/favourites/${ProductId}`,
        method: "post",
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });

      forceUpdate();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container
      sx={{
        paddingBottom: "32px",
        gap: 3,
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
          gap: 1,
        },
      }}
      component={"section"}
    >
      <Stack
        justifyContent={"space-between"}
        sx={{
          [theme.breakpoints.down("sm")]: {
            alignItems: "center",
          },
        }}
        direction={"row"}
      >
        <Typography variant="h2">New Arrivals</Typography>
        <NavLink
          path={`/category?type=type=new-arrivals`}
          component={
            <ButtonWithIcon
              isIconStart={false}
              type={"text"}
              text={"View All"}
              icon={
                <ArrowForwardIosIcon fontSize="20px" color={"highEmphasis"} />
              }
            />
          }
        />
      </Stack>
      <HorizontalScrollSection
        gap={5}
        direction="row"
        justifyContent="space-between"
        overflow={"scroll"}
      >
        {data?.products?.map((CardData, index) => {
          return (
            <Box
              key={index}
              sx={{
                minWidth: "286px",
                flexGrow: "1",
                [theme.breakpoints.down("sm")]: {
                  minWidth: "136px",
                },
              }}
            >
              <ProductCard
                favouritesAction={addRemoveFormFavourites}
                isInFavourites={favouritesSet?.has(CardData.id)}
                data={CardData}
              />
            </Box>
          );
        })}
      </HorizontalScrollSection>
    </Container>
  );
};

export default NewArrivalsSection;
