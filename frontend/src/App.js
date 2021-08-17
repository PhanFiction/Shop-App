import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Menu from './components/Menu/Menu.js';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/"><Home/></Route>
        <Route path="/menu"><Menu/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
