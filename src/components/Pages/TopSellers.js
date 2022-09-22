import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { Box, Tab, Typography, } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import TScard from '../SmallComponents/TScard';
import { ProductContext } from '../Context/ProductProvider';
import 'swiper/css'

const TopSellers = () => {
    const [value, setValue] = React.useState('1');

    const {state:{product}} = useContext(ProductContext)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const watches = product.filter((e)=>{
      return e.category === 'watches'
    })
    const topPics = product.filter((e)=>{
      return e.highlight === 'top pics'
    })

    const fontColor=(color)=>{
      
    }

  return (
    <Box bgcolor='black' pb={10} pt={5}>
    <Box style={{maxWidth: '75vw', margin:'auto', background: 'black', position: 'relative', left: '-1rem'}} >
        <h1>Top Sellers</h1>
        
        <Box sx={{ width: 'fit-content', typography: 'body1', position:'relative',   }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider',width: 'fit-content',}}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Smart Watches" value="1" color={value === '1'? 'red': 'gray'} style={{fontWeight: 'bold'}} />
                  <Tab label="Top Pics" value="2" color={value === '2' ? 'red': 'gray'} style={{fontWeight: 'bold'}} />
                </TabList>
              </Box>

{/* ==============TAB 1================= */}

              <TabPanel value="1" >
                <Box style={{width: '75vw', display:'flex' }}>
                    <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={4}
                    loop={false}
                    loopFillGroupWithBlank={true}
                    pagination={{clickable: true}}
                    navigation={true}
                    modules={[Pagination]}
                    >{
                        watches.map((elm, i)=>{
                          return(
                            <SwiperSlide>
                              <TScard name={elm.name} price={elm.price} image={elm.img} key={elm.id} id={elm} />
                            </SwiperSlide>
                          )
                        })
                      }
                    </Swiper>
                </Box>
              </TabPanel>




{/* ==============TAB 2================= */}
              <TabPanel value="2" >
                <Box style={{width: '75vw',}}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={false}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >{
                      topPics.map((elm)=>{
                        return(
                          <SwiperSlide>
                            <TScard name={elm.name} price={elm.price} image={elm.img} key={elm.id} id={elm}/>
                          </SwiperSlide>
                        )
                      })
                    }
                    </Swiper>
                </Box>
              </TabPanel>
            </TabContext>
        </Box>
    </Box>
    </Box>
  )
}

export default TopSellers


