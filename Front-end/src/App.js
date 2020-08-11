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
    const objCart = Object.assign({}, cart);
    // Atualiza a quantidade do carrinho
    let newProduct = true;
    objCart.produtos.forEach((product, index) =>{
      if(product.nome === produto.nome){
        objCart.produtos[index].quantidade++;
        newProduct = false;
      }
    });

    // Adiciona um Novo produto ao Carneirinho
    if(newProduct){
      objCart.produtos.push({
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 1
      });
    }
  }

  function handleProducts(){
    setShowCheckout(false);
    setShowProducts(true);
  }

  function handleShowCheckout(){

  }

  function handleClearCart(){

  }
  return (
    <>
      <Menu />
      <Product
        visible={showProducts}
        handleAddProductToCart={handleAddProductToCart}
      />
      <Checkout/>
    </>
  );
}

export default App;
