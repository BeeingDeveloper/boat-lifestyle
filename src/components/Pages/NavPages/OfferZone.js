import { Box, Button, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React, { useContext, useState } from 'react'
import { ProductContext } from '../../Context/ProductProvider'
import OfferCard from './OfferCard'
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import './sidebar.css'
import CloseIcon from '@mui/icons-material/Close';



const opened =  {
  height: '100vh', width: '25rem', position: 'fixed', 
  zIndex: '1', background: 'black', top: '3rem',
  display: 'block',
}
const closed =  {
  height: '100vh', width: '0rem', position: 'fixed', 
  zIndex: '1', top: '3rem',transition: 'all 0.5s',
  display: 'none'
}
const boxForm = {
  height: '3rem', width: 'auto', background: 'red', position: 'relative', top: '1rem',display: 'flex',justifyContent: 'space-between'
}

const OfferZoneSection = styled(Box)({
  paddingTop: '3rem',
  maxWidth: '80vw',
  margin: 'auto'
})
const Products = styled(Box)({
  height: 'atuo',
  paddingBottom: '3rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)'
})
const FilterIcon =styled(IconButton)({
  position: 'relative', left: '-46%', color: 'red', height: '2rem'
})
const FilterBox = styled(Box)({
  width: '90%',
  margin: 'auto',
  position: 'relative',
  top: '4rem',
})

const OfferZone = () => {

  const {state:{product}} = useContext(ProductContext);
  const [activeFilter , setActiveFilter ]= useState(false)
  const [fromNumber, setFromNumber] =useState(0);
  const [ toNumber, setToNumber] = useState()

  const offProd = product.slice(1, 15);

  const cal = (offPercent, price)=>{
    let getPercent = Math.floor(price* (offPercent/100));
    let finalPrice = price - getPercent ;
    return finalPrice;
  }
 

  const newProd = offProd.map((e)=>{
        let offPrice = Math.floor(Math.random()*10)*Math.floor(Math.random()*10)
        if(offPrice === 0){
          
          let avoidZero = Math.floor(Math.random())
          offPrice =offPrice + avoidZero === 0? avoidZero+2: avoidZero ;
        }
        if(offPrice < 10){
          offPrice =offPrice*10;
        }
    return {...e, price: cal(offPrice, e.price), off: offPrice }
  })

  const filteredItem = newProd.filter((e)=>{
    return e.price > 800 && e.price <1500;
  })
  console.log(filteredItem)

  return (
    <Box>
        <Box>
          <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/offer-page_strip_Web.jpg?v=1634206843' style={{maxWidth: '100vw', paddingTop: '6rem'}} />
        </Box>
        <h1>Offer Zone</h1>


        {/* =========================== FILTER BOX ==================================== */}
        <Box style={activeFilter === true ? opened : closed} >
            <Box style={boxForm}>
              <Typography variant='h5' pl={2} pt={0.5}>Filters</Typography>
              <IconButton style={{paddingRight: '1rem', color: 'white', position: 'inherit'}} onClick={()=>setActiveFilter(false)} >
                <CloseIcon  style={{fontWeight: 'bold', fontSize: '2rem'}} />
              </IconButton>
            </Box>
            {/* --------------------------------------------------------------------------- */}
            <FilterBox>
              <Box style={{display: 'flex', justifyContent: 'space-between'}} >
                <Typography variant='h6' pl={2} >From:</Typography>
                <form style={{  paddingTop: '0.2rem', paddingRight: '1.5rem', height: '1.5rem'}} >
                    <input 
                      type="text" 
                      name="name" 
                      style={{height: '1.5rem', borderRadius: '0.5rem', border: '1px solid gray', paddingLeft: '1rem'}}
                      value={fromNumber}
                      onChange={(e)=>setFromNumber(e.target.value)}
                      />
                </form>
              </Box>
              <Box style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2rem'}} >
                <Typography variant='h6'textAlign={'left'} pl={2} >To:</Typography>
                <form style={{
                        paddingRight: '1.5rem'}} >
                    <input 
                    type="number" 
                    name="name" 
                    style={{height: '1.5rem', borderRadius: '0.5rem', border: '1px solid gray', paddingLeft: '1rem'}}
                    value={toNumber}
                    onChange={(e)=>setToNumber(e.target.value)}
                    />
                </form>
              </Box>
            </FilterBox>
            {/* --------------------------------------------------------------------------- */}
        </Box>
        {/* =========================== FILTER BOX ==================================== */}



        <OfferZoneSection >
          <FilterIcon onClick={()=>setActiveFilter(true)}>
              <DisplaySettingsOutlinedIcon />
              <h6 style={{paddingLeft: '0.5rem'}}>Filter</h6>
          </FilterIcon>
          <Box sx={{  height: 'atuo',
                      paddingBottom: '3rem',
                      display: 'grid',
                      gridTemplateColumns:{ xs: '1fr 1fr', 
                                            sm: '1fr 1fr', 
                                            md: 'repeat(3, 1fr)',
                                            lg: 'repeat(4, 1fr)' } }}>
            {
              newProd.map((elm, i)=>{
                return <OfferCard name={elm.name} image={elm.img} price={elm.price} id={elm} key={elm.id} off={elm.off} />
              })
            }
          </Box>
        </OfferZoneSection>
    </Box>
  )
}

export default OfferZone