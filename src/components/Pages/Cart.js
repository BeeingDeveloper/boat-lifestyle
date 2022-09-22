import {  Box, Button, List, Typography } from '@mui/material'
import React, { useContext } from 'react'

import { ProductContext } from '../Context/ProductProvider';
import CartItem from './CartItem';


const Cart = () => {
  const {state: {cart}} = useContext(ProductContext)
  // const ItemPrice = cart.map((e)=>{
  //   return e.price
  // })
 

  return (
    <>
    <Box>
     
      {
        cart.length===0?(
          <Box style={{position: 'relative', top: '45vh'}}>
          <Typography variant='h6'>Your cart is empty</Typography>
          <Button style={{background: 'red', marginTop: '0.5rem', color: 'white'}} >START SHOPPING</Button>
          </Box>
        ):(
          <List sx={{
            width: '100%',
            maxWidth: 'auto',
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: '78vh',
            '& ul': { padding: 0 },
          }} >
            {cart.map((elm)=>{
              return <CartItem name={elm.name} image={elm.img} price={elm.price} id={elm} key={elm.id} qty={elm.qty} />
            })}
          </List>
        )
      }
    </Box>
      </>
  )
}

export default Cart