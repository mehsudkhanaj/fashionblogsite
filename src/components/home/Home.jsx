import React from 'react'
import {
  styled,
  Container,
  Box,
  Typography,
  Link,
  Grid,
  Stack
} from '@mui/material'
import Hero from '../hero/Hero'
import Categories from '../category/Categories'
import Recent from '../recents/Recent'
import Rightbar from '../rightbar/Rightbar'
const Home = () => {
  return (
    <Box>
      <Hero />
      <Container>
        <Categories />
        <hr />

        <Stack direction={'row'} mt={8} spacing={8}>
          <Box flex={3} sx={{padding:'18px 100px 100px 100px'}}>
            <Recent />
          </Box>
          <Box flex={1}><Rightbar/></Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home
