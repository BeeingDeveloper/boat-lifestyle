import React, { useContext, useState } from 'react'
import { AppBar ,Toolbar ,  Typography, Box, InputBase, IconButton, Badge, Button, List, ListItem, CardMedia} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchIcon from '@mui/icons-material/Search';
import 'swiper/css';
import { ProductContext } from './Context/ProductProvider';
import { styled } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import Cart from './Pages/Cart';
import {  Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const CartBox = styled(Box)({
  height: '100vh', 
  width: '25rem', 
  background: 'white', 
  position: 'fixed', 
  right: '0',
  top: '0'
})
const CheckOut = styled(Box)({
  height: '8rem', width: '25rem', borderTop: '2px solid red', 
  position: 'fixed', bottom: '0rem', background: 'black'
})
const ShippingNtotal = styled(Box)({
  width: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '0.5rem'
})
const TextL = {
  color: 'white',
  textAlign: 'left',
  fontWeight: 'bold',
  paddingLeft: '1rem',
}
const TextR = {
  color: 'white',
  textAlign: 'right',
  fontWeight: 'bold',
  paddingRight: '1rem' 
}
const PaymentBox = styled(Box)({ 
  height: 'auto', display: 'flex', justifyContent: 'space-between',
  maxWidth: '23rem',margin: 'auto',position: 'relative',top: '1rem'
})
const UPI= {
  background: 'red',
  color: 'white',
  fontWeight: 'bold',
  height: '2.8rem',
  width: '11rem',
  border: '2px solid red' 
}
const CARD= {
  background: 'transparent',
  color: 'white',
  fontWeight: 'bold',
  height: '2.8rem',
  width: '11rem',
  border: '2px solid red' 
}
const MenuBox = styled(Box)({
  height: '100vh', 
  width: '25rem', 
  background: 'white', 
  position: 'fixed', 
  left: '0',
  top: '0',
  zIndex: '1'
})
 
// =============================================================================================================

const Navbar = () => {
  const {state:{ cart}} = useContext(ProductContext);
  const [activeCart, setActiveCart] = useState(false)
  const [menu, setMenu] = useState(false)

  return (
<AppBar position="fixed" bgcolor='black'  >
        <Toolbar bgcolor='black' style={{ display: 'flex', justifyContent: 'space-between', width: '80vw', margin: 'auto'}} >
{/* ======================================= MENU ICON ================================================= */}
          <IconButton sx={{display:{xs: 'block', sm: 'block', md: 'none', lg: 'none'}}}
                      onClick={()=>setMenu(true)}
                      >
            <MenuIcon style={{height: '2rem', width: '2rem', color:'black',}} />
          </IconButton>

          <MenuBox  display={menu === true ? 'block' : 'none'} >
            <Box style={{padding: '0.5rem',display: 'flex', justifyContent:'space-between',
            background: 'red', height: '2rem'  }}>
              <Typography variant='h5' textAlign='left' >Categories</Typography>
              <IconButton 
                aria-label="close" 
                style={{color: 'white', fontSize:'5rem'}}
                onClick={()=>setMenu(false)}>
                <CloseIcon style={{fontSize:'2rem'}}/>
              </IconButton>
            </Box>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem>
                <Link to='/offerzone' >
                <Box style={{height: 'auto', width: 'auto', }}>
                  <CardMedia
                    component='img'
                    src='https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_540x.png?v=1612338251'
                    style={{height: '10rem', position: 'relative', left: '10%'  }}
                    />
                </Box>
                </Link>
              </ListItem>
              <ListItem>
                <Box style={{height: 'auto', width: 'auto', }}>
                  <CardMedia
                    component='img'
                    src='https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_540x.png?v=1612338387'
                    style={{height: '10rem', position: 'relative', left: '10%'  }}
                    />
                </Box>
              </ListItem>
              <ListItem>
                <Box style={{height: 'auto', width: 'auto', }}>
                  <CardMedia
                    component='img'
                    src='https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_720x.jpg?v=1648546494'
                    style={{height: '10rem', position: 'relative', left: '10%'  }}
                    />
                </Box>
              </ListItem>
              <ListItem>
                <Box style={{height: 'auto', width: 'auto', }}>
                  <CardMedia
                    component='img'
                    src='https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_540x.png?v=1612338356'
                    style={{height: '10rem', position: 'relative', left: '10%'  }}
                    />
                </Box>
              </ListItem>
            </List>
          </MenuBox>
{/* ======================================= MENU ICON ================================================= */}



{/* ======================================= BOAT LOGO ================================================= */}
          <img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.png?v=1646731229'
                alt='boatLogo'
               style={{maxHeight: '2.5rem', maxWidth:'8rem'}} />
{/* ======================================= BOAT LOGO ================================================= */}




{/* ======================================== NAV LINKS =============================================== */}
          <Box sx={{display:{xs: 'none', sm: 'none', md: 'grid', lg: 'grid'}
                    , gridTemplateColumns: 'repeat(3, 1fr)', paddingLeft: '5%'
                    }} >
                    <h4> <Link to='/' style={{color: 'white'}} >Shop</Link></h4>
                    <h4> <Link to='/offerzone' style={{color: 'white'}}>OfferZone</Link></h4>
                    <h4> <Link to='/more'style={{color: 'white'}}>More</Link></h4>
          </Box>
{/* ======================================== NAV LINKS =============================================== */}




          <Box style={{display:'flex', flexDirection: 'row', gap: '1rem'}}>
            <Box sx={{width: '20rem', height: '2.3rem', background: 'white', 
                      borderRadius: '3rem', marginTop: '0.4rem',
                      display:{xs: 'none',sm: 'none', md: 'block', lg: 'block' }
                      }} >
              <InputBase placeholder='Seach' />
              <SearchIcon style={{position: 'relative', top: '0.5rem'}} />
            </Box>

{/* ============================================== CART LOGICS ================================================ */}
              <IconButton >
                <AccountCircleIcon style={{height: '2rem', width: '2rem', color:'black', }} />
              </IconButton>
              
              <IconButton onClick={()=>setActiveCart(true)} >
                <Badge badgeContent={cart.length} style={{color: 'red'}}>
                  <ShoppingCartCheckoutIcon style={{height: '2rem', width: '2rem',color:'black' }} />
                </Badge>
              </IconButton>

              <CartBox display={activeCart === true ? 'block' : 'none'} >
                  <Box style={{padding: '0.5rem',display: 'flex', justifyContent:'space-between',background: 'red', height: '2rem'}}>
                    <Typography variant='h5' textAlign='left' >Your Cart</Typography>
                    <IconButton 
                      aria-label="close" 
                      style={{color: 'white', fontSize:'5rem'}}
                      onClick={()=>setActiveCart(false)}>
                      <CloseIcon style={{fontSize:'2rem'}}/>
                    </IconButton>
                  </Box>
                <Cart />
                {
                  cart.length === 0 ? (
                    <Box></Box>
                  ) : (<CheckOut>
                    <ShippingNtotal>
                        <Typography style={TextL}>Shipping:</Typography>
                        <Typography style={TextR}>FREE</Typography>
                    </ShippingNtotal>
                    <ShippingNtotal>
                    <Typography style={TextL}>Total:</Typography>
                        <Typography style={TextR}>{cart[0].price}</Typography>
                    </ShippingNtotal>
                    <PaymentBox>
                        <Button style={UPI}>Pay via UPI/COD</Button>
                        <Button style={CARD}>Pay via CARD</Button>
                    </PaymentBox>
                  </CheckOut>)
                }
              </CartBox>
{/* ============================================== CART LOGICS ================================================ */}
          </Box>
        </Toolbar>

          <Box>
            small changes
          </Box>

            <Box sx={{width: '22rem', height: '2.3rem', background: 'white', 
                  borderRadius: '3rem', position: 'relative', margin: 'auto', zIndex: '-1',
                  marginBottom: '1rem', display:{xs: 'block', sm: 'block', md: 'none', lg: 'none'}
                  }} >
                <InputBase placeholder='Seach'  />
              <SearchIcon style={{position: 'relative', top: '0.5rem'}} />
            </Box>
      </AppBar>

  )
}

export default Navbar