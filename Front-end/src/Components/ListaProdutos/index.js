import React from 'react';
import placeholderImage from '../../Assets/286x180.png';
import {Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

// import { Container } from './styles';

function ListaProdutos(props) {
  const produtos = [
    { nome: 'Aprenda Java', preco: 'R$ 59,99' },
		{ nome: 'JavaScript em 24 horas', preco: 'R$ 19,99' },
		{ nome: 'React em 7 dias', preco: 'R$ 29,99' },
		{ nome: 'Algoritmos e Estrutura de Dados', preco: 'R$ 25,99' },
		{ nome: 'Start-Up', preco: 'R$ 29,99' },
		{ nome: 'Testes Unitários com Jasmine', preco: 'R$ 14,99' },
		{ nome: 'APIs RESTful com Spring e Java', preco: 'R$ 15,99' },
		{ nome: 'TypeScript na prática', preco: 'R$ 9,99' }
  ];

  function handleByProduct(e, produto){
    e.preventDefault();
    props.handleAddProductToCart(produto);
    props.handleMessageSuccess(produto);
  }

  function handleListProduct(){
    let key = 1;
    const cards = produtos.map(produto =>
      <Card
        key={key}
        data-testid={'card' + key++}
        style={{ width: '18rem', margin: '10px', float: 'left' }}
      >
        <Card.Img variant="top" src={placeholderImage} />
        <Card.Body className="text-center">
          <Card.Title style={{ height: '40px' }}>
            {produto.nome}
          </Card.Title>
          <Card.Text>
            Descrição do produto aqui...
          </Card.Text>
          <Card.Text>
            {produto.preco}
          </Card.Text>
          <Button
            variant="success"
            style={{ width: '100%' }}
            onClick={(e) => handleByProduct(e, produto)}
            >
            Comprar
          </Button>
        </Card.Body>
      </Card>
    )
  }
  return handleListProduct;
}
ListaProdutos.PropTypes = {
  handleAddProductToCart: PropTypes.func.isRequired,
  handleMessageSuccess: PropTypes.func.isRequired
}
export default ListaProdutos;