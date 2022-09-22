import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductProvider';

import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { DeleteForeverOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';


// ========================== STYLED COMPONENT =================================//
    const CCard = styled(Card)({
      maxWidth: 'auto', margin: '0.25rem' , display: 'flex',borderBottom: '2px solid red', borderRadius: '1rem'
    })
    const CIButton = styled(IconButton)({
      color: 'red'
    })
    const CButtonBox = styled(Box)({
      display: 'flex', flexDirection: 'row', gap: '.5rem'
    })
    const Name = styled(Typography)({
      fontWeight: 'bolder', fontSize: '1rem'
    })
    const Price = styled(Typography)({
      fontWeight: 'bolder', fontSize: '0.9rem', color: 'red'
    })
    const Qty = styled(Typography)({ 
      fontWeight: '700', paddingTop: '0.5rem', color: 'red', fontSize: '1rem'
    })
// ========================== STYLED COMPONENT =================================//




const CartItem = ({name, image, price, id, qty}) => {
  const { dispatch} = useContext(ProductContext)
  
  return (
        <CCard>
          <CardMedia
            component="img"
            alt="green iguana"
            style={{maxHeight: '5rem',maxWidth: '5rem', padding: '1rem'}}
            image={image}
          />
          <CardContent>
            <Box textAlign='left'>
              <Name variant='h6'>{name}</Name>
              <Price variant='h6'> Rs { price} </Price>
              <CButtonBox>
                  <CIButton onClick={()=>dispatch({type: 'DECREMENT', payload: id })} > <RemoveCircleOutlineOutlinedIcon/> </CIButton>
                    <Qty>{qty}</Qty>
                  <CIButton onClick={()=>dispatch({type: 'INCREMENT', payload: id })} > <AddCircleOutlineOutlinedIcon/> </CIButton>
                  <IconButton onClick={()=>dispatch({type: 'REMOVE_FROM_CART', payload: id} )}>
                    <DeleteForeverOutlined />
                  </IconButton>
              </CButtonBox>
            </Box>
          </CardContent>
      </CCard>
    
  )
}

export default CartItem