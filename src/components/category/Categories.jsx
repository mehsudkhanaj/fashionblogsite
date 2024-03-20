import {
  AppBar,
  styled,
  Toolbar,
  InputBase,
  Box,
  Typography,
  Link,
  Menu,
  MenuItem,
  Stack
} from '@mui/material'
import kids from '/kids.avif'
import women from '/women.avif'
import men from '/men.avif'

const StyledBox = styled(Box)({
  height: 200,
  width: '100%',
  cursor: 'pointer',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'cover'
})
const StyledTypoGraphy = styled(Typography)({
  margin: '25% 50px 25% 50px',
  background: 'white',
  opacity: '0.8'
})
const Categories = () => {
  return (
    <Box>
      <Stack direction={{xs:'col',sm:'row'}} spacing={{xs:1,sm:2,md:4}} mt={5}>
        <StyledBox sx={{ backgroundImage: `url(${kids})` }}>
          <StyledTypoGraphy align='center' variant='h3'>
            kids
          </StyledTypoGraphy>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${women})` }}>
          <StyledTypoGraphy align='center' variant='h3'>
            Men
          </StyledTypoGraphy>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${men})` }}>
          <StyledTypoGraphy align='center' variant='h3'>
            Women
          </StyledTypoGraphy>
        </StyledBox>
      </Stack>
    </Box>
  )
}

export default Categories
