import React, { useState } from 'react';
import ListarProdutos from './listar-produtos';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

// import { Container } from './styles';

function Products(props) {
  const [message, setMessage] = useState(false);
  const [product, setProduct] = useState('')

  function handleMessageSuccess(produto) {
    setMessage(true);
    setProduct(produto.nome);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  }

  function visibleProduct() {
    return props.visibleProduct ? null : 'hidden'
  }
  return (
    <div className={visibleProduct()}>
      <Alert
        variant="success"
        style={{ margin: '10px' }}
        show={message}
      >
        <b>{produto}</b> adicionado com sucesso ao carrinho!
        </Alert>
      <ListarProdutos

      />
    </div>
  )
}

export default ListaProdutos;