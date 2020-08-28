import React, {useState, useEffect} from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';
import Menu from '../../Components/Menu';
import Product from '../../Components/ListaProdutos/product';
import Checkout from '../../Components/Checkout';

export default function Single(props) {

  function handleProductDetails(produto){
    return (
      <Container className="mt-5">
        <Row className="d-flex align-items-center mt-5">
          <Col md={12} xl={6}>
          <h1>Imagem Produto</h1>
          </Col>
          <Col md={12} xl={6}>
          <h1>Nome Produto</h1>
          <h2>Preço produto</h2>
          <Button>Comprar</Button>
          </Col>
      </Row>
    </Container>
    )
  }
  return handleProductDetails();
}
