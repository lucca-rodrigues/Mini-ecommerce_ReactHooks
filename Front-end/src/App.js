import React, {useState, useEffect} from 'react';
import Menu from './Components/Menu';
import Product from './Components/ListaProdutos/product';
import Checkout from './Components/Checkout';

import './App.css';

function App() {
  const [cart, setCart] = useState({produtos: []});
  const [showProducts, setShowProducts] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);
  const [total, setTotal] = useState('0,00');

  function handleAddProductToCart(produto){
    alert('teste');
  }

  // function handleProducts(){
  //   setShowCheckout(false);
  //   setShowProducts(true);
  // }

  // function handleShowCheckout(){

  // }

  // function handleClearCart(){

  // }
  return (
    <>
      <Menu></Menu>
      <Product
        visible={showProducts}
        handleAddProductToCart={handleAddProductToCart}
      />
      <Checkout></Checkout>
    </>
  );
}

export default App;
