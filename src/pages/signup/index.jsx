import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import NavLink from "../../components/links/nav-link";
import axiosProductionInstance from "../../utils/axios-instances";

const defaultTheme = createTheme();

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const form = new FormData();
      form.append("password", data.password);
      form.append("dateOfBirth", data.date);
      form.append("email", data.email);
      form.append("mobile", data.mobileNumber);
      form.append("firstName", data.firstName);
      form.append("lastName", data.lastName);
      const response = await axiosProductionInstance({
        method: "post",
        url: `/auth/signup`,
        data: form,
      });
        reset();
    } catch (err) {
      alert(err?.response?.data?.data?.message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  minLength="5"
                  autoComplete="given-name"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                <Typography color={"error.main"}>
                  {errors?.firstName?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
                <Typography color={"error.main"}>
                  {errors?.lastName?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password", {
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      message:
                        "min length 8 and should have one char, number, and special char",
                    },
                    required: "Password is required",
                  })}
                />
                <Typography color={"error"}>
                  {errors?.password?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  type="tel"
                  id="mobile"
                  autoComplete="new-mobile"
                  {...register("mobileNumber", {
                    required: "Mobile Number is required",
                    pattern: {
                      value: /^[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/,
                      message: "invalid mobile number",
                    },
                  })}
                />{" "}
                <Typography color={"error.main"}>
                  {errors?.mobileNumber?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="date"
                  id="date"
                  autoComplete="new-date"
                  {...register("date", {
                    required: "Date is required",
                  })}
                />
                <Typography color={"error.main"}>
                  {errors?.date?.message}
                </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink
                  path="/signIn"
                  component={
                    <Link variant="body2">
                      Already have an account? Sign in
                    </Link>
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
