import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider
} from "@mui/material";
const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h7" fontweight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={3}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography variant="h7" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100}>
          <ImageListItem>
            <img
              src="https://blogs.voanews.com/all-about-america/files/2018/03/Fast_food_meal.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.shopify.com/s/files/1/0580/3245/5858/files/29351737_2152446668377854_356570745477300982_o_2152446668377854.jpg?v=1634843436&width=1080"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://static01.nyt.com/images/2022/07/20/dining/18jewish-deli5/merlin_208624194_d6c7da34-76b7-42d1-a8e5-28b5d45bfdda-threeByTwoMediumAt2X.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlaxE2hcmTVZ6kb0quZ1gX8YuUuekl31caA&usqp=CAU"
            alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
           Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
