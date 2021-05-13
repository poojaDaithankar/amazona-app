import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import productScreen from './Screens/ProductScreen';
import SigninScreen from './Screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './Screens/RegisterScreen';



function App() {
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  
  return (
    <BrowserRouter>
    <div className="grid-container">
<header className="row">
<div>
    <Link className="brand" to="/">
      Amazona   </Link>
</div>
<div>
    <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
</div>
</header>
<main>
 <Route path="/cart/:id?" component={CartScreen}></Route>
  <Route path="/product/:id" component={productScreen}></Route>
  <Route path="/" component={HomeScreen} exact></Route>
  <Route path="/signin" component={SigninScreen}></Route>
  <Route path="/register" component={RegisterScreen}></Route>
  
    </main>
    <footer className="row center">All rights reserved</footer>
  </div>
  </BrowserRouter>
  );
}
export default App;


