import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import fire from './config/firebase';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import './App.css';

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
   authListener()
    
  }, [])

  function authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log('Logged user:',user);
      setUser(user)
      
      
    });
  }

    return (
      <>
      <BrowserRouter >

      <div className="app">

          {user ? <Home/> : <Login/>} 

      </div>

      </BrowserRouter>
      </>
    )
  
}

export default App;

