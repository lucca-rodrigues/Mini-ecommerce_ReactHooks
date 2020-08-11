import React, {useState} from 'react';
import Product from '../ListaProdutos';
import PropTypes from 'prop-types';
import {Alert} from 'react-bootstrap';

function ListaProdutos(props) {
  const [showMsg, setShowMsg] = useState(false);
  const [produto, setProduto] = useState('');

  function visible() {
    return props.visible ? null : 'hidden';
  }

  function handleMessage(produto){
    setShowMsg(true);
    setProduto(produto.nome);
    setTimeout(() => {
      setShowMsg(false)
    }, 3000);
  }

  return (
    <div className={visible()}>
      <Alert
        variant="success"
        style={{ margin: '10px' }}
        show={showMsg}>
        <b>{produto}</b> adicionado com sucesso ao carrinho!
      </Alert>
      <Product
        handleMessage={handleMessage}
        handleAddProductToCart={props.handleAddProductToCart} />
    </div>
  )
}

ListaProdutos.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleAddProductToCart: PropTypes.func.isRequired
}

export default ListaProdutos;
