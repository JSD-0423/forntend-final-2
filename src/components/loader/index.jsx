import React from 'react'
import { Stack } from '@mui/material'
import CircularProgress from "@mui/material/CircularProgress";

const Loader = ({height}) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={height}>
        <CircularProgress size={"100px"} />
      </Stack>
  )
}

export default Loader