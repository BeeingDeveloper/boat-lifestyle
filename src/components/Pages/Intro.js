import { Box } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import boat1 from '../../images/boat1.webp'
import boat2 from '../../images/boat2.jpg'
import boat3 from '../../images/boat3.webp'
import boat4 from '../../images/boat4.jpg'
import { Autoplay, Navigation, Pagination } from 'swiper';

const Intro = () => {
  return (
    <>
        <Swiper spaceBetween={1500} slidesPerView={1} centeredSlides={true} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"

         >
          <SwiperSlide style={{maxWidth: '100vw' }}  >
            <Box  >
              <img src={boat1} style={{maxWidth: '100vw'}} />
            </Box>
          </SwiperSlide>

          <SwiperSlide style={{maxWidth: '100vw' }} >
            <Box >
              <img src={boat2} style={{maxWidth: '100vw'}} />
            </Box>
          </SwiperSlide>

          <SwiperSlide style={{maxWidth: '100vw' }}  >
            <Box >
              <img src={boat3} style={{maxWidth: '100vw'}} />
            </Box>
          </SwiperSlide>


          <SwiperSlide style={{maxWidth: '100vw' }} > 
          <Box >
              <img src={boat4} style={{maxWidth: '110vw'}} />
            </Box>
          </SwiperSlide>
        </Swiper>
    </>
  )
}

export default Intro