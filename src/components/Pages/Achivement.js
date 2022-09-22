import styled from '@emotion/styled'
import { Box, CardMedia } from '@mui/material'
import React from 'react'


const Features = styled(Box)({
    display: 'flex',
    maxWidth: '50vw',
    margin: 'auto',
    justifyContent: 'space-between',
    paddingBottom: '5rem',
    paddingTop: '2rem'
})
const Feature = styled(Box)({
    display: 'flex',

})

const Achivement = () => {
  return (
    <Box>
        <Box style={{maxHeight: 'fit-content', background: 'black'}}> 
        <CardMedia
            component='img'
            src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter-Awards_11-02-2022_5d6a9e4a-d3d4-434b-8846-4403e92c3573_1995x.png?v=1651217615'
            style={{width: '65vw', margin: 'auto', paddingTop: '5rem',paddingBottom:'5rem'}}
        />
        </Box>
        <h1>Brand Promise</h1>
        <Features>
            <Feature>
                <CardMedia component='img' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/group_186_3x_4616a7a4-8c24-4065-a237-54e3d574bb94.png?v=1611132367' style={{height: '3.5rem', width: '5rem'}} />
                <h2>Free Shipping</h2>
            </Feature>
            <Feature>
                <CardMedia component='img' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_3x_50a1233e-95d9-4e18-9e8e-757b545e2c06.png?v=1611132367' style={{height: '4rem', width: '4rem'}} />
                <h2>Free Shipping</h2>
            </Feature>
            <Feature>
                <CardMedia component='img' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_2_2x_9d5071e2-154a-4f06-b660-9d0430a18248.png?v=1611132367' style={{height: '4rem', width: '4rem'}} />
                <h2>Free Shipping</h2>
            </Feature>
        </Features>
    </Box>
  )
}

export default Achivement