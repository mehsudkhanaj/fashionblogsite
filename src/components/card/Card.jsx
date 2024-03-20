import React from 'react'
import {
    Box,
    CardContent,
    Typography,
    CardMedia
  } from '@mui/material'

const Card = ({img}) => {
  return (
    <Box>
    <CardMedia
    component='img'
    alt='green iguana'
    height='100%'
    image={img}
  />
  <CardContent>
    <Typography
      gutterBottom
      align='center'
      variant='body1'
      component='div'
      color='tomato'
    >
      Perfumes
    </Typography>
    <Typography
      gutterBottom
      align='center'
      variant='h5'
      component='div'
    >
      Wearing this item will make your more charm
    </Typography>
    <Typography
      gutterBottom
      align='center'
      variant='body2'
      component='div'
      color='text.secondary'
    >
      Its women love
    </Typography>
    <Typography variant='body2' align='center' color='text.secondary'>
      Lizards are a widespread group of squamate reptiles, with over
      6,000 species, ranging across all continents except Antarctica
    </Typography>
  </CardContent>
  </Box>
  )
}

export default Card
