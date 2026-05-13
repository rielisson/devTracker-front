import './App.css';
import { useState } from 'react';
import { Login } from './componentes/Login';
import { Dashboard } from './componentes/Dashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userName, setNameUser] = useState(""); 
  const [userEmail, setUserEmail] = useState("");
  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={(nameUserData: string, userEmailData: string) => {
          setIsLoggedIn(true)
          setNameUser(nameUserData);
          setUserEmail(userEmailData);
        }} />
      ) : (
        <Dashboard name={userName} email={userEmail}/>
      )}
    </>
  )
}

export default App
