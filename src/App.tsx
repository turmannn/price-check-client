// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import ButtonAppBar from './common/app-bar';
import Landing from './components/Landing/Landing'
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
// import { createContext, useContext } from "react";
import AuthContext from "./common/authContext";
import SignIn from './common/login';
import { useCookies } from 'react-cookie'

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
    // const [ user, setUser ] = useState({ name: '', email: ''})
    const [authenticated, setAuthenticated] = useState(false);
    const [loginDialog, setLoginDialog] = useState(false)

    const showLoginDialog = () => {
      setLoginDialog(true)
    }
    const hideLoginDialog = () => {
      setLoginDialog(false)
    }
    const onLogoutClick = () => {
      removeCookie('Authorization');
      setAuthenticated(false)
    }

    return (
      <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
        <div className="App">
          {
            loginDialog
            ? <SignIn onCloseClick={hideLoginDialog} hideLoginDialog={hideLoginDialog} />
            : (
              <>
                <header className="App-header">
                {/* <ButtonAppBar user={user.name}/> */}
                <ButtonAppBar
                  onLoginClick={showLoginDialog}
                  onLogoutClick={onLogoutClick}
                  userName={authenticated ? 'somebody': ''}
                />
                </header>
                <Outlet />
                <Link to="/dashboard">Dashboard</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
              </>
            )
          } 
        </div>
      </AuthContext.Provider>
    );
  }

export default App;
