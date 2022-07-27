import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Badge, Stack } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Elmo from './avatar.PNG';
import { lightBlue } from '@mui/material/colors';

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  });

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            DevShop
          </Typography>

          <CssTextField className = "searchBar" placeholder="search..." id="custom-css-outlined-input"
          sx={{
            input: {
              color: "black",
              background: "white"
            }
          }}
           InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: lightBlue[100] }} />
              </InputAdornment>
            ),
          }}/> 

          <div>
          <Badge className="cornerMail" badgeContent={4} color="error">
          <MailIcon sx={{ width: 24, height: 24 }}/>
          </Badge>
          <Badge className="cornerNotif" badgeContent={99} color="error">
          <NotificationsIcon sx={{ width: 24, height: 24 }}/>
          </Badge>
          <Avatar className="cornerAvatar" alt="Fire Elmo" src={Elmo} sx={{ width: 24, height: 24 }}/>
          </div> 

          
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}