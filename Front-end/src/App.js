import React, {useState, useEffect} from 'react';
import Menu from './Components/Menu';
import ListaProdutos from './Components/ListaProdutos';
import Checkout from './Components/Checkout';

import './App.css';

function App() {
  const [cart, setCart] = useState({});
  const [showProducts, setShowProducts] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);
  const [total, setTotal] = useState('0,00');

  function handleAddProduct(){

  }

  function handleProducts(){

  }

  function handleShowCheckout(){

  }

  function handleClearCart(){

  }
  return (
    <>
      <Menu></Menu>
      <ListaProdutos></ListaProdutos>
      <Checkout></Checkout>
    </>
  );
}

export default App;
