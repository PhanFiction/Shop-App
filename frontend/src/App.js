import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Menu from './components/Menu/Menu.js';
import MenuItems from './components/Menu/Category/MenuItems/MenuItems';
import Food from './components/Menu/Category/MenuItems/Food.js';

function App()
{

  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/menu" component={Menu}/>

        <Route exact path="/menu/breakfast"><MenuItems category={'breakfast'}/></Route>
        <Route path="/menu/breakfast/:id" component={Food}/>

        <Route exact path="/menu/lunch"><MenuItems category={'lunch'}/></Route>
        <Route path="/menu/lunch/:id" component={Food}/>

        <Route exact path="/menu/dinner"><MenuItems category={'dinner'}/></Route>
        <Route path="/menu/dinner/:id" component={Food}/>

        <Route exact path="/menu/dessert"><MenuItems category={'dessert'}/></Route>
        <Route path="/menu/dessert/:id" component={Food}/>

        <Route exact path="/menu/drinks"><MenuItems category={'drinks'}/></Route>
        <Route path="/menu/drinks/:id" component={Food}/>
      </Switch>
    </>
  );
}

export default App;
