import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {FaShoppingBasket, FaCashRegister, FaShoppingCart} from 'react-icons/fa';
import PropTypes from 'prop-types';
import ItensCart from './ItensCart';

function Menu(props) {
  function TotalCalculate() {
    if (props.produtos.length === 0) {
      return '0,00';
    }
    let total = 0;
    props.produtos.forEach(produto => {
      let preco = produto.preco.replace(',', '.').replace('R$ ', '');
      total += parseFloat(preco) * produto.quantidade;
    });
    return total.toFixed(2).toString().replace('.', ',');
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="">Mini Ecommerce</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <NavDropdown
            title={
              <div style={{ display: 'inline-block' }}>
                <FaShoppingCart />
                &nbsp;
                Carrinho
              </div>
            }
            drop="left">
            <NavDropdown.Item href=""
              onClick={props.handleProducts}
              >
              <FaShoppingBasket size={20}/>
              &nbsp;
              <strong>Produtos</strong>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <ItensCart produtos={props.produtos} />
            <NavDropdown.Divider />
            <NavDropdown.Item href="" data-testid="total-carrinho">
              Total: R$ {TotalCalculate()}
            </NavDropdown.Item>
            <span className={props.produtos.length === 0 ? 'hidden' : null}>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href=""
                style={{ color: 'green' }}
                onClick={() => props.handleShowCheckout(TotalCalculate())}
                >
                <FaCashRegister size={20}/>
                &nbsp;
                Finalizar compra
              </NavDropdown.Item>
            </span>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Menu.propTypes = {
  produtos: PropTypes.array.isRequired,
  handleShowProdutos: PropTypes.func.isRequired,
  handleShowCheckout: PropTypes.func.isRequired
}
export default Menu;
