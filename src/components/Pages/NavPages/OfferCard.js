import { Button, Card, CardActions, CardContent, CardMedia, styled, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { ProductContext } from '../../Context/ProductProvider'

const Sbutton = styled(Button)({
    background: 'red', position: 'relative', height: '1.3rem', fontWeight: '900',
})
const SCardContent = styled(CardContent)({
    height: '4.5rem',  marginRight: '0.25rem' , marginLeft: '0.25rem', marginBottom: '0.25rem',  borderRadius: '0.8rem'
})
const Name = styled(Typography)({
    fontWeight: 'bold', textAlign: 'left', fontSize: '1rem', height: '2.25rem'
})
const Price = styled(Typography)({
    fontWeight: '900', color: 'red',  fontSize: '0.8rem',
})
const ButtonAction = styled(CardActions)({
    justifyContent: 'space-between', paddingTop: '1.5rem', margin: 'auto',
})

const ItemCard = styled(Card)({
    background: '#282B2D',borderRadius: '0.8rem', maxWidth: '20rem', margin: '0.5rem'
})
const Tag = styled(Box)({
    height: '1.75rem', width: '8rem', background: 'black',
    position: 'relative',
    top: '0.5rem',
    borderBottomRightRadius: '1rem',
    overflow: 'visible',
})



// ------------------------------------------------------------------------
const OfferCard = ({name, image, price, id, off}) => {
  const {dispatch } = useContext(ProductContext)
  return (
    <>
        <ItemCard >
        <Tag>
            <h5 style={{paddingTop: '0.25rem', color: 'red', fontWeight: '900'}}>YOU SAVE {off}%</h5>
        </Tag>
          <CardMedia
            component="img"
            style={{maxHeight: '16rem', maxWidth: '16rem', margin: 'auto'}}
            image={image}
            sx={{display:{md:'none', lg: 'none'}}}
          />
          

          <SCardContent bgcolor="#181A1B" >
            <Name variant="h6" > {name} </Name>
            <ButtonAction>
                <Price variant='h6' >₹{price} </Price>
                <Sbutton size="small" onClick={()=>dispatch({type: 'ADD_TO_CART', payload:id })}>ADD+</Sbutton>
             </ButtonAction>
          </SCardContent>
        </ItemCard>
    </>
  )
}

export default OfferCard