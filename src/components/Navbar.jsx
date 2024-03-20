import {useState} from 'react'
import {
  AppBar,
  styled,
  Toolbar,
  InputBase,
  Box,
  Typography,
  Link,
  Menu,
  MenuItem
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })
  const SocialBox = styled(Box)({
    display: 'flex',
    gap: 10
  })
  const MenuBox = styled(Box)({
    display: 'flex',
    gap: 30
  })
  const SearchBox = styled(Box)({
    display: 'flex',
    gap: 5
  })

  const MenuItems = [
    { Name: 'Home', Link: '/' },
    { Name: 'Products', Link: '#' },
    { Name: 'Portfolio', Link: '#' },
    { Name: 'Blog', Link: '#' },
    { Name: 'Contact Us', Link: '#' }
  ];
  const [open, setopen] = useState(false);
  return (
    <>
      <AppBar sx={{ background: 'black' }} position={'static'}>
        <StyledToolbar>
          <SocialBox>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </SocialBox>
          <MenuBox
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex'
              }
            }}
          >
            {MenuItems.map((item, i) => (
              <Typography sx={{ cursor: 'pointer', fontSize: '14px' }} key={i}>
                {item.Name}
              </Typography>
            ))}
          </MenuBox>
          <SearchBox>
            <InputBase placeholder='Search Here' sx={{ color: 'white' }} />
            <MenuIcon
              sx={{
                color: 'white',
                display: { md: 'none', xs: 'block', sm: 'block' }
                
              }}
              onClick={()=>setopen(!open)}
            />
          </SearchBox>
        </StyledToolbar>
        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          open={open}
          onClose={() => setopen(!open)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
        >
          <Box sx={{ width: 350, height: '90vh' }}>
            {MenuItems.map((item, i) => (
              <MenuItem sx={{ cursor: 'pointer', fontSize: '14px' }} key={i}>
                {item.Name}
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </AppBar>
    </>
  )
}

export default Navbar
