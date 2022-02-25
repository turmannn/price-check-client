// import * as React,  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from "react";
import authContext from "./authContext";

// interface Data {
//   name: string;
// }

export default function ButtonAppBar(props: any) {
  // const { setAuthenticated } = useContext(authContext);
  // const handleLogin = () => setAuthenticated(true);
  // const handleLogout = () => setAuthenticated(false);

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
          <Button
            // onClick={props.userName ? props.handleLoginClick : handleLogoutClick}
            onClick={props.userName ? props.onLogoutClick : props.onLoginClick}
            color="inherit">
            { props.userName ? 'Logout' : 'Login' }
        </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}