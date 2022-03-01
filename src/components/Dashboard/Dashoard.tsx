import React from 'react';
// import { useOutletContext } from 'react-router-dom';
import { useUser } from '../../App';

export default function Dashboard() {
  // const { userName } = useOutletContext<string| null>()
  const { userName } =  useUser();
  if (userName) {
    return(
      <h2>Dashboard</h2>
    );
  }
  return <h2>Not authenticated</h2>
}
