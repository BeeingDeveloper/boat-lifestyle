import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import { styled } from '@mui/system'
import React from 'react'


const Descrip = styled(Typography)({
  fontWeight: '900', textAlign: 'left', paddingTop: '1rem', color: 'white'
})

const BlogCard = ({image, des}) => {
  return (
    <>
    <Card style={{maxWidth: '35rem', }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          width='auto'
          image={image}
          style={{hover: {
            "&:hover": {
              display: 'none'
            }
          }}}
        /> 
          <Descrip variant="h6">
          {des}
          </Descrip>
      </CardActionArea>
    </Card>
    </>
  )
}

export default BlogCard