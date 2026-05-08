import './App.css';
import { useState } from 'react';
import { Login } from './componentes/Login';
import { Dashboard } from './componentes/Dashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userName, setNameUser] = useState(""); 
  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={(nameUserData: string) => {
          setIsLoggedIn(true)
          setNameUser(nameUserData);
        }} />
      ) : (
        <Dashboard name={userName}/>
      )}
    </>
  )
}

export default App
