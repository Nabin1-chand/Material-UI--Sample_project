import React from 'react'
import { Favorite, MoreVert, Share ,FavoriteBorder} from "@mui/icons-material";
import {

  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography, 
  CardHeader,
  Avatar,
  Checkbox
} from "@mui/material";

const Post = () => {
  return (
    <>
         <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              N
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Burger and French Fry"
          subheader="JUly 20, 2022"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg&w=1200"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Do you like to taste it?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon ={<FavoriteBorder/>}checkedIcon={<Favorite sx={{color:"red"}}/>}/>
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default Post