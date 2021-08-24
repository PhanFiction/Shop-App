import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Menu from './components/Menu/Menu.js';
import Lunch from './components/Menu/Category/MenuItems/Lunch/Lunch.js';
import Breakfast from './components/Menu/Category/MenuItems/Breakfast/Breakfast.js';
import Food from './components/Menu/Category/MenuItems/Food.js';

function App() {
  return (
    <>
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/menu/lunch" component={Lunch}/>
        <Route path="/menu/lunch/:id" component={Food}/>

        <Route exact path="/menu/breakfast" component={Breakfast}/>
        <Route exact path="/menu/breakfast/:id" component={Food}/>
      </Switch>
    </>
  );
}

export default App;
