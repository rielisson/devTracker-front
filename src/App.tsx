import './App.css';
import { useState } from 'react';
import { Login } from './componentes/Login';
import { Dashboard } from './componentes/Dashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Dashboard />
      )}
    </>
  )
}

export default App
