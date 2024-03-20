import React from 'react'
import shoping from '/shoping.avif'
import Card from '../card/Card'
import {
    
    Container,
    Box,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Grid,
    Avatar,
    Stack,ListItemText,
    Divider
  } from '@mui/material'
const Rightbar = () => {
  return (
    <Box >
        <Typography align='center' bgcolor={'black'} color='white'>
            Most Popular

        </Typography>
    
        <List sx={{ width: '100%',height:'100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar
          sx={{
            height:80,
            width:80,
            
          }}
          variant="square"
          alt="Remy Sharp" src={shoping} />
        </ListItemAvatar>
        <ListItemText
          
          secondary={
            'Amazing Experience'
          }
          
        />
      
      </ListItem>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar
          sx={{
            height:80,
            width:80,
            
          }}
          variant="square"
          alt="Remy Sharp" src={shoping} />
        </ListItemAvatar>
        <ListItemText
          
          secondary={
            'Amazing Experience'
          }
          
        />
      
      </ListItem>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar
          sx={{
            height:80,
            width:80,
            
          }}
          variant="square"
          alt="Remy Sharp" src={shoping} />
        </ListItemAvatar>
        <ListItemText
          
          secondary={
            'Amazing Experience'
          }
          
        />
      
      </ListItem>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar
          sx={{
            height:80,
            width:80,
            
          }}
          variant="square"
          alt="Remy Sharp" src={shoping} />
        </ListItemAvatar>
        <ListItemText
          
          secondary={
            'Amazing Experience'
          }
          
        />
      
      </ListItem>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar
          sx={{
            height:80,
            width:80,
            
          }}
          variant="square"
          alt="Remy Sharp" src={shoping} />
        </ListItemAvatar>
        <ListItemText
          
          secondary={
            'Amazing Experience'
          }
          
        />
      
      </ListItem>
      <ListItem alignItems="flex-end">
        <ListItemAvatar>
          <Avatar
          sx={{
            height:80,
            width:80,
            
          }}
          variant="square"
          alt="Remy Sharp" src={shoping} />
        </ListItemAvatar>
        <ListItemText
          
          secondary={
            'Amazing Experience'
          }
          
        />
      
      </ListItem>
      <Divider variant='inset' component={'i'}></Divider>
    </List>
    <Typography align='center' bgcolor={'black'} color='white'>
            About Us

        </Typography>
        <Card img={shoping}/>
    </Box>
   
  )
}

export default Rightbar
