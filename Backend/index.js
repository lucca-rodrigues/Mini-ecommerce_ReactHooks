const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {finalizarCompra, obterCidadesPorEstado, obterProdutos} = require('./controllers/mini-ecommerce.js');


const app = express();
const port = 3001;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

// mini-ecommerce
app.post('/mini-ecommerce/checkout/finalizar-compra', finalizarCompra);
app.get('/mini-ecommerce/estado/:siglaEstado/cidades', obterCidadesPorEstado);
app.get('/mini-ecommerce/produtos', obterProdutos)

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));
