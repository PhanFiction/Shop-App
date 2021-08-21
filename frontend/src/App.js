import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Menu from './components/Menu/Menu.js';
import Page from './components/Page/Page.js';


function App() {
  return (
    <div>
      <Navbar/>
      <Route exact path="/"><Home/></Route>
      <Route exact path="/menu"><Menu/></Route>
      <Route path="/menu/breakfast"><Page/></Route>
    </div>
  );
}

export default App;
