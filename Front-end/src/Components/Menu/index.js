import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {FaShoppingBasket, FaCashRegister, FaShoppingCart} from 'react-icons/fa';
import PropTypes from 'prop-types';
import ItensCart from './ItensCart';

function Menu(props) {


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
              onClick={props.handleShowProducts}
              >
              <FaShoppingBasket size={20}/>
              &nbsp;
              <strong>Produtos</strong>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <ItensCart produtos={props.produtos} />
            <NavDropdown.Divider />
            <NavDropdown.Item href="" data-testid="total-carrinho">
              Total: R$
              {/* {TotalCalculate()} */}
            </NavDropdown.Item>
            <span
              className={props.produtos === 0 ? 'hidden' : null}
            >
              <NavDropdown.Divider />
              <NavDropdown.Item
                href=""
                style={{ color: 'green' }}
                onClick={() => props.handleShowCheckout()}
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
  // As Informações são Criadas no App.js que enviam os parâmetros para serem utilizados aqui
  // Estas funções enviam os parâmetros deste componente para o Carrinho e Checkout.
  produtos: PropTypes.array.isRequired,
  handleShowProducts: PropTypes.func.isRequired,
  handleShowCheckout: PropTypes.func.isRequired
}
export default Menu;
