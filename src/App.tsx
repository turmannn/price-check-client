// import * as React from 'react';
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import SignIn from './common/login';
import AppBar from './common/app-bar';

function App() {
    const [userName, setUserName] = useState('');
    const [loginDialog, setLoginDialog] = useState(false)

    function hideLoginDialog () {
      setLoginDialog(false)
    }
    function showLoginDialog () {
      setLoginDialog(true)
    }

    if (loginDialog) {
      return (
        <SignIn
          hideLoginDialog={hideLoginDialog}
          setUser={setUserName}
        />
      );
    }
    return (
      <div className="App">
        <>
          <header className="App-header">
          {/* <ButtonAppBar user={user.name}/> */}
          <AppBar
            userName={userName}
            resetUser={() => setUserName('')}
            setUser={(name: string) => setUserName(name)}
            hideLoginDialog={hideLoginDialog}
            showLoginDialog={showLoginDialog}
          />
          </header>
          <Outlet />
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
        </>
      </div>
    );
  }

export default App;
