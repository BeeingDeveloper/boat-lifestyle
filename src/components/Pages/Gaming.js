import { Box, Tab, Typography } from '@material-ui/core'
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import React, { useContext } from 'react'
import { SwiperSlide,Swiper } from 'swiper/react'
import { Pagination, Navigation } from "swiper";
import { ProductContext } from '../Context/ProductProvider';
import TScard from '../SmallComponents/TScard';

const Gaming = () => {
    const [value, setValue] = React.useState('1');
    const {state:{product}} = useContext(ProductContext)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const gaming = product.filter((e)=>{
        return e.highlight === 'gaming'
    })
  return (
    <Box style={{background: 'black', paddingTop: '5rem', paddingBottom: '5rem' }} >
        <Box style={{ maxWidth: '75vw', typography: 'body1', margin: 'auto', position: 'relative', left: '1rem'}}>
            <h1 variant='h3' style={{paddingBottom: '5rem'}}> Gaming </h1>
            
              
{/* -------------------------------------------------------------------------------- */}
                {/* =========TAB 1============= */}
              
                <Box style={{width: '75vw',}}>
                  <Swiper
                      slidesPerView={4}
                      spaceBetween={30}
                      slidesPerGroup={4}
                      loop={false}
                      loopFillGroupWithBlank={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                      >
                        {
                        gaming.map((elm, i)=>{
                              return(
                                <SwiperSlide>
                                  <TScard name={elm.name} price={elm.price} image={elm.img} key={elm.id} id={elm} />
                                </SwiperSlide>
                              )
                          })}
                      </Swiper>
                  </Box>
        </Box>
    </Box>
  )
}

export default Gaming