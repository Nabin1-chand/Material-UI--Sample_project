import React from 'react'
import { useState } from 'react'
import { Box, Fab, Modal, Tooltip, styled, Typography,Avatar,TextField,Stack, ButtonGroup,Button} from '@mui/material'
import{Add as AddIcon, EmojiEmotions, PersonAdd,Image, VideoCameraBack, DateRange} from "@mui/icons-material"
const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
});
const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px",
})
const Add = () => {
    const [open, setOpen]= useState(false)
  return (
<>
<Tooltip onClick={e=>setOpen(true)}
 title="Delete" sx={{position:"fixed",bottom:20, left:{xs:"calc(50%-25px)",md:30}}}>
    <Fab color="primary" aria-label="add">
     <AddIcon/>

    </Fab>
      
    </Tooltip>
<StyledModal
  open={open}
  onClose={e=> setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>

  <Box   bgcolor={"background.default"} color={"text.primary"} width={400} height={250}  borderRadius={5}>
    <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
    <UserBox>
    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg"  />
    </UserBox>
    <TextField sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="Whats on your mind"
          variant="standard"
        />
        <Stack direction ="row" gap={1}>
            <EmojiEmotions color="primary"/>
            <Image color="secondary"/>
            <VideoCameraBack color="sucess"/>
            <PersonAdd color="error"/>

        </Stack>
        <ButtonGroup sx={{marginTop:"15px"}} fullWidth variant="contained" aria-label="outlined primary button group">
                <Button>Post</Button>
                <Button sx={{width:"100px"}}>
                    <DateRange/>
                </Button>
                </ButtonGroup>
                </Box>
 
</StyledModal>

</>
  )
}

export default Add