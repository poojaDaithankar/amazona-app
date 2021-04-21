import React from 'react';
import data from './data';
import Product from'./components/Product';



function App() {
  return (
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
    <div>
        <div className="row center">
          {
            data.products.map(product=>(
              <Product key={product._id} product={product}></Product>
            
            ))
          }
         
        </div>
        </div>

      
    </main>
    <footer className="row center">All rights reserved</footer>
  </div>
  );
}
export default App;


