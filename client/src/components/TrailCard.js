import React from 'react'
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HikingIcon from '@mui/icons-material/Hiking';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

//add ternary for button to display depending on if hiked or not

function TrailCard({ trail }) {
    const { id, name, altitude, difficulty, description, image } = trail;
    
    return (
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {difficulty}
          </Typography>
          {/* <Typography variant='h'>
            {altitude}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" alt="Mark as hiked">
          <HikingIcon/> or <AddLocationAltOutlinedIcon/>
        </Button>
      </CardActions>
    </Card>
  );
}

export default TrailCard;
