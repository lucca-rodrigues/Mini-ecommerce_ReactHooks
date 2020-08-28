import React from 'react';
import Placeholder from '../../Assets/286x180.png';
import {Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function ListaProdutos(props) {
  const produtos = [
    { key: 1, nome: 'Aprenda Java', preco: 'R$ 59,99' },
		{ key: 2, nome: 'JavaScript em 24 horas', preco: 'R$ 19,99' },
		{ key: 3, nome: 'React em 7 dias', preco: 'R$ 29,99' },
		{ key: 4, nome: 'Algoritmos e Estrutura de Dados', preco: 'R$ 25,99' },
		{ key: 5, nome: 'Start-Up', preco: 'R$ 29,99' },
		{ key: 6, nome: 'Testes Unitários com Jasmine', preco: 'R$ 14,99' },
		{ key: 7, nome: 'APIs RESTful com Spring e Java', preco: 'R$ 15,99' },
		{ key: 8, nome: 'TypeScript na prática', preco: 'R$ 9,99' }
  ];

  function handlePurchaseProduct(e, produto){
    e.preventDefault();
    props.handleAddProductToCart(produto);
    props.handleMessage(produto);
    console.log('Comprando ' + produto.nome);
  }

  function render(){
    const cards = produtos.map(produto =>
      <Card
        key={produto.key}
        data-testid={'card' + produto.key}
        style={{ width: '18rem', margin: '10px', float: 'left' }}
      >
        <Link to={`/produtos/${encodeURIComponent(produto.key)}`}>
          <Card.Img variant="top" src={Placeholder} />
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
              onClick={(e) => handlePurchaseProduct(e, produto)}
              >
              Comprar
            </Button>
          </Card.Body>
        </Link>
      </Card>
    );
    return cards;
  }
  return render();
}

ListaProdutos.propTypes = {
  handleAddProductToCart: PropTypes.func.isRequired,
  handleMessageSuccess: PropTypes.func.isRequired
}
export default ListaProdutos;
