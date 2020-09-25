import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
            <div className="app_body">
                <Sidebar/>
                <Body/>
            </div>
                <Footer/>
        </div>
  );
}

export default App;
