import React from 'react'
import Card from '../card/Card';
import tree from '/tree.avif'

import {
  styled,
  CardContent,
  Box,
  Typography,
  Link,
  Grid,
  CardMedia
} from '@mui/material'

const Recent = () => {
  return (
    <Box>
      <Grid container>
        <Grid item md={6} xs={12}>
            <Card img={tree}/>
         
        </Grid>
        <Grid item sx={{ background: 'green' }}>
            <Card img={tree}/>
          
        </Grid>
      </Grid>
    </Box>
  )
}

export default Recent
