import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import productScreen from './Screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
<header className="row">
<div>
    <a className="brand" href="/">Amazona</a>
</div>
<div>
    <a href="/cart">cart</a>
    <a href="/signin">signin</a>

</div>
</header>
<main>
  <Route path="/product/:id" component={productScreen}></Route>
  <Route path="/" component={HomeScreen} exact></Route>
  
    </main>
    <footer className="row center">All rights reserved</footer>
  </div>
  </BrowserRouter>
  );
}
export default App;


