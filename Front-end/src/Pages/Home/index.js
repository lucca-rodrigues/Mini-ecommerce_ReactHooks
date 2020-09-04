import React, {useState, useEffect} from 'react';
import Menu from '../../Components/Menu';
import Product from '../../Components/ListaProdutos/product';
import Checkout from '../../Components/Checkout';

function Home() {
  const [cart, setCart] = useState({produtos: []});
  const [showProducts, setShowProducts] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);
  const [total, setTotal] = useState('0,00');

  function handleAddProductToCart(produto){
    const objCart = Object.assign({}, cart);
    // Atualiza a quantidade do carrinho
    let newProduct = true;
    objCart.produtos.forEach((prod, index) =>{
      if(prod.nome === produto.nome){
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
    setShowProducts(true);
    setShowCheckout(false);
  }

  function handleShowCheckout(total){
    setShowProducts(false);
    setShowCheckout(true);
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

export default Home;
