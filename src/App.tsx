// import * as React from 'react';
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import SignIn from './common/login';
import AppBar from './common/app-bar';
import { Route, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashoard';
import constants from './common/constants'
import { useOutletContext } from 'react-router-dom';

type ContextType = { userName: string | null };

export default function App() {
  const [userName, setUserName] = useState<string | null>(null);
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
        <Outlet context={{ userName }}/>
        <Link to={constants.PATH_DASHBOARD}>Dashboard</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </>
    </div>
  );
}

// the approach ss a recommendation from react router for typescript version 
// for useOutlecContext: https://reactrouter.com/docs/en/v6/api
export function useUser() {
  return useOutletContext<ContextType>();
}
