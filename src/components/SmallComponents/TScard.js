import { Button, Card, CardActions, CardContent, CardMedia, styled, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductProvider'

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

const TScard = ({name, image, price, id}) => {

  const {state:{product, cart}, dispatch } = useContext(ProductContext)
  // console.log(dispatch)
  return (
    <>
        <Card sx={{ width: 360, height: 380,  }} style={{background: 'white',borderRadius: '0.8rem', }} >
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
        </Card>
    </>
  )
}

export default TScard