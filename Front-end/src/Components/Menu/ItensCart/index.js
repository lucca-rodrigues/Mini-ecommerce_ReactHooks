import React from 'react';
import PropTypes from 'prop-types';
import {FaSadTear} from 'react-icons/fa';

// import { Container } from './styles';

function ItensCart(props) {
  function renderProdutocts(){
    // Se carrinho estiver vazio
    if(props.produtos.length === 0){
      return (
        <NavDropdown.Item href="" data-testid="itens">
          <FaSadTear size={20} />
          Carrinho vazio...
        </NavDropdown.Item>
      )
    }
  }
  return <div />;
}
ItensCart.propTypes = {
  produtos: PropTypes.array.isRequired
}
export default ItensCart;
