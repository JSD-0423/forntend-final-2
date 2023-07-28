import { Stack } from '@mui/material'
import React from 'react'
import Discount from '../discount'
import FinalPrice from '../final-price'
import PreviousPrice from '../previous-price'

const FullPriceDetails = ({fontSize,price,discount}) => {
  return (
    <Stack flexDirection={"row"} gap={2} alignItems="center" flexWrap={"wrap"}>
        <FinalPrice fontSize={fontSize.priceFont} price={price} discount={discount}/>
        <PreviousPrice fontSize={fontSize.discountFont} previousPrice={price}/>
        <Discount fontSize={fontSize.percentageFont} discount={discount}/>
    </Stack>
  )
}
export default FullPriceDetails
