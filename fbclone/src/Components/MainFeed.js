import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Logo from './Logo.png';
import Zilyanna from './Zilyanna.png';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function RecipeReviewCard() {

  return (
    <Card className="cardSize" >
      <CardHeader className='headerbar'
        avatar={
          <Avatar src= {Zilyanna} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Zilyanna Vendraye"
        subheader="September 14, 2016"
      />
      <CardContent className="headerbar ">
        <Typography variant="body1" color="black">
          Hey everyone! Guild applications are now officially open, accessible via our website. Excited
          to hear from all you adventurers.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height= "600"
        image= {Logo}
        alt="Guild Logo"
      />
    </Card>
  );
}
