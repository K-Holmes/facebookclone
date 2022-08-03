import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
// import SearchIcon from '@mui/icons-material/Search';
// import InputAdornment from '@mui/material/InputAdornment';
import Fregni from './Fregni.png';
// import { lightBlue } from '@mui/material/colors';


const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        borderWidth: 5,
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

          <CssTextField className = "searchBar" placeholder="search..." id="custom-css-outlined-input" size='small'
          sx={{
            input: {
              color: "black",
              background: "white"
            }
          }}
          //  InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <SearchIcon sx={{ color: lightBlue[100] }} />
          //     </InputAdornment>
          //   ),
          // }}
          /> 

          <div>
          <Badge className="cornerMail" badgeContent={4} color="error">
          <MailIcon sx={{ width: 24, height: 24 }}/>
          </Badge>
          <Badge className="cornerNotif" badgeContent={100} max={99} color="error">
          <NotificationsIcon sx={{ width: 24, height: 24 }}/>
          </Badge>
          <Avatar className="cornerAvatar" alt="Fregs" src={Fregni} sx={{ width: 24, height: 24 }}/>
          </div> 

          
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}