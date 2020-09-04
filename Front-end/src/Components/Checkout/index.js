import React from 'react';
import { Form, Row, Col, Button, Jumbotron, Modal} from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, {registerLocale} from 'react-datepicker'
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

registerLocale('pt', pt);

function Checkout(props) {
  return (
    <Jumbotron
      fluid
      style={{margin: '10px', padding: '30px'}}
    >
      <h3 className="text-center">Finalizar compra</h3>

      <Form noValidate style={{margin: '10px'}} className="text-left">
        <Form.Group as={Row} controlId="email">
          <Form.Label className="text-left" column sm={3}>Email</Form.Label>
          <Col sm={9}>
            <Form.Control
              type="email"
              placeholder="Digite seu E-mail"
              name="email"
              data-testid="text-email"
            />

            <Form.Control.Feedback type="invalid">
              Digite um e-mail válido!
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/*  */}
        <Form.Group as={Row} controlId="nome">
          <Form.Label column sm={3}>Nome completo</Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Digite seu nome completo"
              name="nomeCompleto"
              data-testid="text-nome-completo"
            />

            <Form.Control.Feedback type="invalid">
              O nome deve ter no mínimo 5 caracteres.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/*  */}
        <Form.Group as={Row} controlId="nome">
          <Form.Label column sm={3}>Data Nascimento</Form.Label>
          <Col sm={9}>
            <DatePicker
              locale="pt"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="dd-MM-yyyy"
              placeholderText="Selecione a data"
              widthPortal

            />

            <Form.Control.Feedback type="invalid">
              O nome deve ter no mínimo 5 caracteres.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/*  */}
        <Form.Group as={Row} controlId="cpf">
          <Form.Label className="text-left" column sm={3}>CPF</Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Digite seu CPF"
              name="cpf"
              data-testid="text-cpf"
            />

            <Form.Control.Feedback type="invalid">
              Digite um CPF válido!
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/*  */}
        <Form.Group as={Row} controlId="endereco">
          <Form.Label className="text-left" column sm={3}>Endereço</Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Digite seu endereco completo"
              name="endereco"
              data-testid="text-endereco"
            />

            <Form.Control.Feedback type="invalid">
              Digite um endereco válido!
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/*  */}
        <Form.Group as={Row} controlId="estado">
          <Form.Label className="text-left" column sm={3}>Estado</Form.Label>
          <Col sm={9}>
            <Form.Control
              as="select"
              name="estado"
              data-testid="estado"
            >
              <option value="">Selecione o estado</option>
              {/*listar os estados*/}
            </Form.Control>

            <Form.Control.Feedback type="invalid">
              Selecione um estado!
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/*  */}
        <Form.Group as={Row} controlId="cidade">
          <Form.Label className="text-left" column sm={3}>Cidade</Form.Label>
          <Col sm={9}>
            <Form.Control
              as="select"
              name="cidade"
              data-testid="cidade"
            >
              <option value="">Seleciona a cidade</option>
              {/*listar os cidades*/}
            </Form.Control>

            <Form.Control.Feedback type="invalid">
              Selecione uma cidade!
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/*  */}
        <Form.Group as={Row} controlId="cep">
          <Form.Label className="text-left" column sm={3}>CEP</Form.Label>
          <Col sm={9}>
            <Form.Control
              type="number"
              placeholder="Digite seu CEP"
              name="cep"
              data-testid="text-cep"
            />

            <Form.Control.Feedback type="invalid">
              Digite um CEP válido!
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        {/*  */}
        <Form.Group as={Row} controlId="emailPromocional">
          <Form.Label className="text-left" column sm={12}>
            Deseja receber nossos e-mails promocionais?
          </Form.Label>
          <Col sm={12}>
            <Form.Check
              inline
              name="emailPromocional"
              type="radio"
              id="promocaoSim"
              value="S"
              label="Sim"
              style={{marginLeft: '15px'}}
            />
            <Form.Check
              inline
              name="emailPromocional"
              type="radio"
              id="promocaoNao"
              value="N"
              label="Nao"
            />
          </Col>
        </Form.Group>
        {/*  */}
        <Form.Group as={Row} controlId="termos">
          <Form.Label className="text-left" column sm={12}>
            Deseja receber nossos e-mails promocionais?
          </Form.Label>
          <Col sm={12}>
            <Form.Check
              name="termos"
              label="Concordo com os termos e condições"
              style={{marginLeft: '15px'}}
              data-testid="accept-terms"
            />
          </Col>
        </Form.Group>
        {/*  */}
        <Form.Group as={Row} controlId="finalizar">
          <Col sm={12}>
            <Button
              type="submit"
              variant="Successful"
              data-testid="btn-finish"
            >
              Finalizar
            </Button>
          </Col>
        </Form.Group>
      </Form>

      <Modal show={false} data-testid="modal-sucecss">
        <Modal.Header closeButton>
          <Modal.Title>Compra realizada com sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Um email de confirmação foi enviado com os detalhes da transação.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={false} data-testid="modal-sucecss">
        <Modal.Header closeButton>
          <Modal.Title>Erro ao processar pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Tente novamente em instantes.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning">
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </Jumbotron>
  )
}

export default Checkout;
