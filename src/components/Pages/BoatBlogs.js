import styled from '@emotion/styled'
import {  Button, Container, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import BlogCard from './BlogCard'



const Blogs= styled(Button)({
  background: 'red', marginTop: '2rem', fontWeight: 'bolder',
})

const BoatBlogs = () => {
  return (
    <Box style={{height: 'auto', paddingBottom: '3rem', background:'#2C2F31'}}>
        <h1 variant='h3' style={{paddingTop: '2.5rem'}}>boAt Blogs</h1>
        <Box sx={{display: 'grid', gap: '5rem', width: '90vw', margin: 'auto', paddingTop: '2.5rem', gridTemplateColumns:{xs: '1fr', sm: '1fr', md: '1fr 1fr', lg:'repeat(3, 1fr)'}}}>
            <BlogCard image='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Earphone_1296x_540x_25759241-1386-4661-bec0-bad7c111178f_540x.png?v=1650620291' des='Earphones Buying Guide - Everything You Need To Know' />
            <BlogCard image='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Main-banner_520x500_540x_d7c9944e-0985-498b-9a89-3a54d32c9dd2_520x.png?v=1650620307' des='The Ultimate Smartwatch Guide - Get The World On Your Wrist' />
            <BlogCard image='https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Artboard_1_600x.png?v=1652873769' des='Watch Primia: The Ultimate Bluetooth Calling Smartwatch' />
        </Box>
        <Blogs >EXPLORE BLOGS</Blogs>
    </Box>
  )
}

export default BoatBlogs