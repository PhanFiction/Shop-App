import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Home2 from './components/Home/Home2.jsx';
import Home from './components/Home/Home.js';
import Menu from './components/Menu/Menu.js';
import MenuItems from './components/Menu/Category/MenuItems/MenuItems';
import Food from './components/Menu/Category/MenuItems/Food.js';
import Cart from './components/Cart/Cart.js';
import Login from './components/Login/Login.js';
import SignUp from './components/SignUp/Signup.js';
import authService from './service/authorization.js';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

function App()
{
  const [user, setUser] = React.useState(null);
  const [cart, setCart] = React.useState(null);

  React.useEffect(()=>{
    const loggedUser = window.localStorage.getItem('loggedUser');

    if(loggedUser){
        const user = JSON.parse(loggedUser);
        setUser(user);
        authService.setToken(user.token);
    }
  },[])

  React.useEffect(()=>{
    authService.getCartItems().then(cartItems => setCart(cartItems));
  },[]);


  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar user={user} setUser={setUser}/>
        <Switch>
          <Route exact path="/user/login"> <Login/> </Route>

          <Route path="/signup" component={SignUp}/>

          <Route exact path="/" component={Home2}/> {/** memory leak in here from react carousol*/}
          
          <Route exact path="/menu" component={Home}/>

          <Route exact path="/menu/breakfast"><MenuItems category={'breakfast'}/></Route>
          <Route path="/menu/breakfast/:id"> <Food user={user} setCart={setCart}/> </Route>

          <Route exact path="/menu/lunch"><MenuItems category={'lunch'}/></Route>
          <Route path="/menu/lunch/:id">  <Food user={user} setCart={setCart}/> </Route>

          <Route exact path="/menu/dinner"><MenuItems category={'dinner'}/></Route>
          <Route path="/menu/dinner/:id" >  <Food user={user} setCart={setCart}/> </Route>

          <Route exact path="/menu/dessert"><MenuItems category={'dessert'}/></Route>
          <Route path="/menu/dessert/:id" >  <Food user={user} setCart={setCart}/> </Route>

          <Route exact path="/menu/drinks"><MenuItems category={'drinks'}/></Route>
          <Route path="/menu/drinks/:id" >  <Food user={user} setCart={setCart}/> </Route>

          {
            cart === null ? <></> : <Route path="/cart"> <Cart user={user} cart={cart} setCart={setCart}/> </Route> 
          }

        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
