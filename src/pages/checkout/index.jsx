import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm } from "react-hook-form";
import NavLink from "../../components/links/nav-link";
import ProductSummery from "../../components/product-summery";
import OrderDetails from "../../components/order-details";
import useAxiosGet from "../../utils/use-axios-get";
import axiosProductionInstance from "../../utils/axios-instances";
import { useContext } from "react";
import AuthContext from "../../contexts/auth-context";

const CheckOut = () => {
  const { data: cartData } = useAxiosGet("/carts", "get", true);
  const { auth } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const form = new FormData();
      form.append("firstName", data.firstName);
      form.append("lastName", data.lastName);
      form.append("countryCode", data.prefix);
      form.append("mobile", data.mobileNumber);
      form.append("email", data.email);
      form.append("location", data.location);

      const response = await axiosProductionInstance({
        method: "post",
        url: `/addresses`,
        headers: {
          Authorization: `Bearer ${auth}`,
        },
        data: form,
      });
      postOrder(response.data?.data?.address?.id);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  const postOrder = async (addressID) => {
    try {
      const form = new FormData();
      form.append("cartId", cartData?.cart[0]?.id);
      form.append("transactionId", "04d37272-286c-11ee-be56-0242ac120002");
      form.append("addressId", addressID);

      const response = await axiosProductionInstance({
        method: "post",
        url: `/orders`,
        headers: {
          Authorization: `Bearer ${auth}`,
        },
        data: form,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth={"100%"} sx={{ minHeight: `calc(100vh - 433px)` }}>
      <Typography variant="h2" color="primary.main" marginBottom={"40px"}>
        Checkout
      </Typography>
      <Grid
        container
        marginBottom={"68px"}
        spacing={15}
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item sm={12} md={7}>
          <Accordion style={{ boxShadow: "none" }} defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <Typography
                color={"#13101E"}
                fontWeight="600"
                fontSize={"20px"}
                lineHeight="26px"
              >
                Add New Address
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingLeft: "0", paddingRight: "0" }}>
              <form id="myForm" onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack gap={3}>
                  <Stack direction={{ sm: "row", xs: "column" }} gap={4}>
                    <Box width={"100%"}>
                      <Typography
                        marginBottom={"8px"}
                        color="highEmphasis.main"
                        fontWeight={"500"}
                      >
                        First Name
                      </Typography>
                      <TextField
                        hiddenLabel
                        variant="filled"
                        fullWidth
                        placeholder="Enter First Name"
                        type={"text"}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        {...register("firstName", {
                          required: "First Name is required",
                        })}
                      />
                      <Typography color={"error.main"}>
                        {errors?.firstName?.message}
                      </Typography>
                    </Box>
                    <Box width={"100%"}>
                      <Typography
                        marginBottom={"8px"}
                        color="highEmphasis.main"
                        fontWeight={"500"}
                      >
                        Last Name
                      </Typography>
                      <TextField
                        required
                        hiddenLabel
                        variant="filled"
                        fullWidth
                        placeholder="Enter Last Name"
                        type={"text"}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                      />
                      <Typography color={"error"}>
                        {errors?.lastName?.message}
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction={{ sm: "row", xs: "column" }} gap={4}>
                    <Box width={"100%"}>
                      <Typography
                        marginBottom={"8px"}
                        color="highEmphasis.main"
                        fontWeight={"500"}
                      >
                        Email
                      </Typography>
                      <TextField
                        hiddenLabel
                        variant="filled"
                        fullWidth
                        placeholder="Enter Email"
                        type={"email"}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        {...register("email", {
                          pattern: {
                            value:
                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid Email Format",
                          },
                          required: "Email is required",
                        })}
                      />
                      <Typography color={"error"}>
                        {errors?.email?.message}
                      </Typography>
                    </Box>
                    <Box width={"100%"}>
                      <Typography
                        marginBottom={"8px"}
                        color="highEmphasis.main"
                        fontWeight={"500"}
                      >
                        Mobile Number
                      </Typography>
                      <Stack direction={"row"} gap={2}>
                        <TextField
                          sx={{ width: { xs: "20%", md: "45%", lg: "30%" } }}
                          required
                          hiddenLabel
                          variant="filled"
                          defaultValue="+970"
                          type={"tel"}
                          InputProps={{
                            disableUnderline: true,
                          }}
                          {...register("prefix", {
                            required: "prefix is required",
                            pattern: {
                              value: /^[+]?[(]?[0-9]{3}[)]?$/,
                              message: "invalid prefix",
                            },
                          })}
                        />
                        <TextField
                          required
                          hiddenLabel
                          variant="filled"
                          fullWidth
                          placeholder="Enter Mobile Number"
                          type={"tel"}
                          InputProps={{
                            disableUnderline: true,
                          }}
                          {...register("mobileNumber", {
                            required: "Mobile Number is required",
                            pattern: {
                              value:
                                /^[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/,
                              message: "invalid mobile number",
                            },
                          })}
                        />
                      </Stack>
                      <Typography color={"error.main"}>
                        {errors.prefix?.message ||
                          errors?.mobileNumber?.message}
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction={"row"} gap={4}>
                    <Box width={{ xs: "100%", sm: "50%" }}>
                      <Typography
                        marginBottom={"8px"}
                        color="highEmphasis.main"
                        fontWeight={"500"}
                      >
                        Location
                      </Typography>
                      <TextField
                        required
                        hiddenLabel
                        variant="filled"
                        fullWidth
                        placeholder="Enter Location"
                        type={"text"}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        {...register("location", {
                          required: "Location is required",
                        })}
                      />
                      <Typography color={"error.main"}>
                        {errors?.location?.message}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </form>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <Typography
                color={"#13101E"}
                fontWeight="600"
                fontSize={"20px"}
                lineHeight="26px"
              >
                Select Payment Method
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingLeft: "0", paddingRight: "0" }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <NavLink
              component={
                <Typography
                  fontWeight={"600"}
                  color={"primary.main"}
                  marginLeft="26px"
                >
                  Back to Cart
                </Typography>
              }
              isUnderLined="true"
              path="/cart"
            />
            <Button
              form="myForm"
              type="submit"
              variant="contained"
              sx={{ padding: "10px 52px" }}
            >
              Place Order
            </Button>
          </Stack>
        </Grid>
        <Grid item sm={12} md={5}>
          <Stack gap={8}>
            <Stack gap={4}>
              <Stack gap={1}>
                <Typography
                  color={"#13101E"}
                  fontSize={"20px"}
                  fontWeight={600}
                >
                  Order Summery
                </Typography>
                <Divider />
              </Stack>
              {cartData?.cart?.[0]?.products.map((product, index) => {
                if (index < 2) {
                  return <ProductSummery product={product} key={index} />;
                }
                return null;
              })}
            </Stack>
            <Stack>
              <OrderDetails
                grandTotal={cartData?.cart?.[0]?.["total_cost"]}
                discount={cartData?.cart?.[0]?.discount}
                deliveryFee={12}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckOut;
