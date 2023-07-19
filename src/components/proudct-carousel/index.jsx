import { Container, Grid } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
const ProductCarousel = () => {
  return (
    <Container maxWidth="100%">
        <Grid container>
            <Grid item>
                <Carousel>

                </Carousel>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ProductCarousel