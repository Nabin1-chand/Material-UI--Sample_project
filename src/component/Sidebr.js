import React from 'react'
import { Home,Storefront , Pages, Group, PersonAdd, Settings, AccountBox, ModeNight} from '@mui/icons-material'
import { Box ,List,ListItem,ListItemIcon,ListItemText,ListItemButton,Switch} from '@mui/material'
const Sidebr = ({mode,setMode}) => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs : "none",sm:"block"}}}>
     <Box position="fixed">
     <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <Home/>
              </ListItemIcon>
              <ListItemText  primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Market Place" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonAdd />
              </ListItemIcon>
              <ListItemText primary="Friend" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="setting" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight color="blue" />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==="light" ? "dark":"light")}/>
            </ListItemButton>
          </ListItem>
          </List>  
     </Box>
         
    </Box>
      
  
  )
}

export default Sidebr
