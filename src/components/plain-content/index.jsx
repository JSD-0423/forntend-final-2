import React from 'react'
import {Box,Stack,Typography} from "@mui/material"
import EastIcon from "@mui/icons-material/East";

const PlainContent = ({color,text,fontSize}) => {
  return (
    <Stack
              gap={{ xs: 1, sm: 1.5, lg: 3 }}
              alignItems="end"
              sx={{
                position: "absolute",
                top: "50%",
                right: "5%",
                transform: "translateY(-50%)",
              }}

              width={{xs:"100px",sm:"150px",md:"251px"}}
            >
              <Typography
                fontSize={{
                  xs: "0.8rem",
                  sm: "1.1rem",
                  md: "1.9rem",
                  lg: "2.5rem",
                }}
                sx={{
                  color: {color},
                  lineHeight: { xs: "18px", md: "40px" ,lg:"52px"},
                  textAlign: "right",
                }}
              >
                {text}
              </Typography>
              <Box
                sx={{
                  borderRadius: "100%",
                  backgroundColor: "#fff",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EastIcon sx={{ color: `${color}` }} fontSize={fontSize}/>{" "}
              </Box>
            </Stack>
  )
}

export default PlainContent