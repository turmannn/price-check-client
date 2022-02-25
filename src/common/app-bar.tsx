// import * as React,  from 'react';
import { useCookies } from 'react-cookie';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar(props: any) {
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);

  function onLogoutClick () {
    removeCookie('Authorization');
    props.resetUser()
  }

  function renderLoginOutButton() {
    if (props.userName) {
      return (
        <Button onClick={onLogoutClick} color="inherit">
          Logout
        </Button>
      );
    }
    return (
      <Button onClick={props.showLoginDialog} color="inherit">
        Login
      </Button>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Page summary
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.userName}
          </Typography>
          {renderLoginOutButton()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
