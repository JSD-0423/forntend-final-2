import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import PlainButton from "../../components/buttons/plain-button";
import ButtonWithIcon from "../../components/buttons/button-with-Icon";
import { useForm } from "react-hook-form";

const CheckOut = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobileNumber, setMobileNumber] = useState();
  // const [location, setLocation] = useState("");
  // const handleChange = (setState) => (e) => {
  //   setState(e.target.value);
  // };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container maxWidth={"100%"} sx={{ minHeight: `calc(100vh - 433px)` }}>
      <Typography variant="h2" color="primary.main" marginBottom={"40px"}>
        Checkout
      </Typography>
      <Grid container marginBottom={"68px"}>
        <Grid item sm={12} md={8}>
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
                        // required
                        hiddenLabel
                        // value={firstName}
                        variant="filled"
                        // onChange={handleChange(setFirstName)}
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
                        // value={lastName}
                        variant="filled"
                        // onChange={handleChange(setLastName)}
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
                        // required
                        hiddenLabel
                        // value={email}
                        variant="filled"
                        // onChange={handleChange(setEmail)}
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
                          sx={{ width: "20%" }}
                          required
                          hiddenLabel
                          // value={mobileNumber}
                          variant="filled"
                          // onChange={handleChange(setMobileNumber)}
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
                          // value={mobileNumber}
                          variant="filled"
                          // onChange={handleChange(setMobileNumber)}
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
                        // value={location}
                        variant="filled"
                        // onChange={handleChange(setLocation)}
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
          <Stack direction={"row"} justifyContent="space-between">
            <PlainButton text={"Back to Cart"} type="text"></PlainButton>
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
      </Grid>
    </Container>
  );
};

export default CheckOut;
