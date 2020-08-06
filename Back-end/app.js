const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {finalizarCompra, obterCidadesPorEstados} = require('');

const app = express();
const port = 3333;

// CONFIG
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());


// MÉTODOS HTTP
app.post('ecommerce/checkout/finalizar-compra', finalizarCompra);

app.get('ecommerce/estado/:siglaEstado/cidades', obterCidadesPorEstados);
//

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));

module.exports = app;