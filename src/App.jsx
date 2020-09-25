import React, { Component } from 'react';
import fire from './config/firebase';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:{}
    }
  }

  componentDidMount(){
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  }

  render(){
    return (
      <div className="app">

          {this.state.user ? <Home/> : <Login/>} 

      </div>
    )
  };
}

export default App;
