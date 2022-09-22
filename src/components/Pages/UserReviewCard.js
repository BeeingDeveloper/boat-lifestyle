import styled from '@emotion/styled'
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CCardMedia = styled(CardMedia)({
    height: '12rem', width: '12rem', margin: 'auto', position: 'relative', top: '5rem' 
})
const ShopButton = styled(Button)({
    color: 'red',
    background: 'black',
    width: '10rem',
    fontWeight: '700',
    position: 'relative',
    bottom: '0rem'
    
})
const Ctext = styled(Typography)({
    fontSize: '1rem',
    height: '5rem'
})

const UserReviewCard = ({image, text}) => {
  return (
    <>
        <Card sx={{ maxWidth: '25rem', borderRadius: '1.5rem', margin: 'auto',  }}>
            <CCardMedia
              component="img"
              image={image}
              alt="green iguana"
            />
            <Box sx={{height:'12rem', marginTop: '2rem',background: '#c78373' }} >
                <h4 variant='h6'style={{paddingTop: '4rem', width: '22rem', height: '2.5rem'}} > {text} </h4>
                <ShopButton > SHOP NOW</ShopButton>
            </Box>
        </Card>
    </>
  )
}

export default UserReviewCard