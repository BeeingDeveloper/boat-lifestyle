import { TabContext, TabList, TabPanel } from '@material-ui/lab'
import { Tab, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { Pagination, Navigation } from "swiper";
import { SwiperSlide,Swiper } from 'swiper/react'
import { ProductContext } from '../Context/ProductProvider';
import TScard from '../SmallComponents/TScard';


const TrendingEarpone = () => {

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const {state:{product}} = useContext(ProductContext);
    const earbuds = product.filter((e)=>{
        return e.category === 'earbuds'
    })
    const wireless = product.filter((e)=>{
    
        return e.category === 'wireless'
    })
    const wired = product.filter((e)=>{
        return e.category === 'wired'
    })

  return (
        <Box bgcolor='black' pt={10} pb={5} >
            <Box sx={{ maxWidth: '75vw', typography: 'body1', margin: 'auto', position: 'relative', left: '-1rem'}}>
              <h1> Trending Earpones</h1>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width:'fit-content' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Earbuds" value="1" color={value === '1'? 'red': 'white'} style={{fontWeight: 'bold'}} />
                    <Tab label="Wired" value="2" color={value === '2'? 'red': 'white'} style={{fontWeight: 'bold'}} />
                    <Tab label="Wireless" value="3" color={value === '3'? 'red': 'white'} style={{fontWeight: 'bold'}} />
                  </TabList>
                </Box>


                
                {/* ====================TAB 1 ============== */}
                <TabPanel value="1">
                    <Box style={{width: '75vw', display:'flex',  }}>
                        <Swiper
                          slidesPerView={4}
                          spaceBetween={30}
                          loop={false}
                          loopFillGroupWithBlank={true}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                          modules={[Pagination, Navigation]}
                          className="mySwiper"
                        >{earbuds.map((elm, i)=>{
                                return(
                                    <SwiperSlide>
                                        <TScard name={elm.name} price={elm.price} image={elm.img} key={elm.id} id={elm} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Box>
                </TabPanel>



                {/* ====================TAB 2 ============== */}
                <TabPanel value="2">
                <Box style={{width: '75vw', display:'flex',  }}>
                        <Swiper
                          // sx={{slidesPerView:{sm: 1, md:3}, slidesPerGroup:{sm:1, md:2}}}
                          slidesPerView={4}
                          spaceBetween={30}
                          // slidesPerGroup={3}
                          loop={false}
                          loopFillGroupWithBlank={true}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                          modules={[Pagination, Navigation]}
                          className="mySwiper"
                        >{wired.map((elm, i)=>{
                                return(
                                    <SwiperSlide>
                                        <TScard name={elm.name} price={elm.price} image={elm.img} key={i} id={elm.id} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Box>
                </TabPanel>


                {/* ====================TAB 3 ============== */}
                <TabPanel value="3">
                <Box style={{width: '75vw', display:'flex',  }}>
                        <Swiper
                          slidesPerView={4}
                          spaceBetween={30}
                          slidesPerGroup={3}
                          loop={false}
                          loopFillGroupWithBlank={true}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                          modules={[Pagination, Navigation]}
                          className="mySwiper"
                        >{wireless.map((elm, i)=>{
                                return(
                                    <SwiperSlide>
                                        <TScard name={elm.name} price={elm.price} image={elm.img} key={i} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Box>
                </TabPanel>
              </TabContext>
            </Box>
        </Box>
  )
}

export default TrendingEarpone



{/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

        </SwiperSlide>
        
      </Swiper> */}