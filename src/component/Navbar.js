import { Mail, Notifications, Person} from '@mui/icons-material'
import { AppBar,Toolbar,styled, Typography, Box, InputBase, Badge, Avatar, Menu,  MenuItem  } from '@mui/material'
import { borderRadius } from '@mui/system';
import React from 'react'
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
 display:"flex",
 justifyContent:"space-between"
});

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}));
const Icons =styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex",
  }
  
}));
const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none",
  }
}));
const Navbar = () => {
const [open , setOpen] = useState(false);
  return (
 <>
   
    <AppBar position="sticky">
        <StyledToolbar>
         <Typography variant="h7" sx={{display:{xs:"none", sm:"block"}}}>NABIN CHAND</Typography>
         <Person sx={{display:{xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder="Search...."/></Search>
        <Icons>
        <Badge badgeContent={3} color="error"> <Mail/> </Badge>
        <Badge badgeContent={4} color="error"><Notifications/></Badge>
        <Avatar alt="Nabin Chand" src="/static/images/avatar/1.jpg"  sx={{width:30, height:30}} onClick={e=>setOpen(true)}/>
        </Icons>
         <UserBox onClick={e=>setOpen(true)}>
         <Avatar alt="Nabin Chand" src="/static/images/avatar/1.jpg"  sx={{width:30, height:30}}/>
         <Typography variant="h8">Nabin</Typography>
         </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-position-menu"
        aria-labelledby="demo-position-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical:'top',
          horizontal:"right",
        }}
         transformOrigin={{
          vertical:"top",
          horizontal:"right",
         }}
      >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
 </>
  )
}

export default Navbar