import styled from '@emotion/styled'
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import UserReviewCard from './UserReviewCard'

const UserReview = () => {
  return (
    <Box style={{paddingTop: '5rem', paddingBottom: '5rem', height: 'auto'}}>
        <h1 style={{paddingBottom: '2rem', fontWeight: 'bolder'}} >What They Say About Us:</h1>

{/* ================================================================================================================================================================================= */}
        <Box sx={{display: 'grid', gap: '2rem', width: 'auto', margin:'auto', justifyContent: 'space-around', gridTemplateColumns:{xs:'1fr', md: '1fr', lg: 'repeat(3, 1fr)'}}} >
            <UserReviewCard image='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/testi-1200_284x.png?v=1649980899' text="It is value for money, best sound especially bass" />            
            <UserReviewCard image='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/testimonial-img-2_284x.png?v=1649668053' text="The battry backup id something unbeliveable" />            
            <UserReviewCard image='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/testimonial-img-3_284x.png?v=1649668053' text="Amezing product, great sound quality and the mic performance is awesome" />            
        </Box>
    </Box>
  )
}

export default UserReview