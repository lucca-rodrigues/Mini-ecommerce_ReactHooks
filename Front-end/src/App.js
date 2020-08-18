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
    objCart.produtos.forEach((produto, index) =>{
      if(produto.nome === produto.nome){
        objCart.produtos[index].quantidade++;
        newProduct = false;
      }
    });

    // Adiciona um Novo produto ao Carrinho
    if(newProduct){
      objCart.produtos.push({
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 1
      });
    }
    setCart(objCart);
  }

  function handleShowProducts(){
    setShowCheckout(false);
    setShowProducts(true);
  }

  function handleShowCheckout(total){
    setShowCheckout(true);
    setShowProducts(false);
    setTotal(total); // Valor Enviado por props
  }

  function handleClearCart(){
    setCart({ produtos: []});
  }
  return (
    <>
      <Menu
        produtos={cart.produtos}
        handleShowProducts={handleShowProducts}
        handleShowCheckout={handleShowCheckout}

      />
      <Product
        visible={showProducts}
        handleAddProductToCart={handleAddProductToCart}
      />
      <Checkout
        visible={showCheckout}
        handleShowProducts={handleShowProducts}
        total={total}
        produtos={cart}
        handleClearCart={handleClearCart}
      />
    </>
  );
}

export default App;
