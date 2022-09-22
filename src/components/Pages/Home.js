import {Box} from '@mui/material'
import React from 'react'
import 'swiper/css';
import TopSellers from './TopSellers';
import Intro from './Intro';
import TrendingEarpone from './TrendingEarpone';
import Gaming from './Gaming';
import BoatBlogs from './BoatBlogs';
import UserReview from './UserReview';
import Achivement from './Achivement';

const Home = () => {
  return (
    <Box style={{paddingTop: '4rem', }}>
        <Intro />
        <TopSellers />
        <TrendingEarpone />
        <Gaming />
        <BoatBlogs />
        <UserReview />
        {/* <Achivement /> */}
    </Box>
  )
}

export default Home