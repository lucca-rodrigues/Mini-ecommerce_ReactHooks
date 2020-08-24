import React from 'react';
import PropTypes from 'prop-types';
import {FaSadTear} from 'react-icons/fa';
import {NavDropdown} from 'react-bootstrap';

// import { Container } from './styles';

function ItensCart(props) {
  function renderProducts(){
    // Se carrinho estiver vazio
    if(props.produtos.length === 0){
      return (
        <NavDropdown.Item href="" data-testid="itens">
          <FaSadTear size={20} />
          Carrinho vazio...
        </NavDropdown.Item>
      );
    }

    // Se houver Produtos
    const itens = props.produtos.map(produto =>
      <NavDropdown.Item href="" key={produto.nome} data-testid={produto.nome}>
        {produto.nome} - {produto.quantidade} x {produto.preco}
      </NavDropdown.Item>
    );
    return itens;
  }
  return renderProducts();
}
ItensCart.propTypes = {
  produtos: PropTypes.array.isRequired
}
export default ItensCart;
