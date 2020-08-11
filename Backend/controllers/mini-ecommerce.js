const cidadesEstados = require('../cidades-estados.json');

function finalizarCompra(req, res) {
  console.log(req.body);
  res.send('ok');
}

function obterCidadesPorEstado(req, res) {
  const siglaEstado = req.params['siglaEstado'].toUpperCase();
  const dadosEstado = cidadesEstados.estados.filter(estado => estado.sigla === siglaEstado);
  if (dadosEstado.length === 0) {
    res.status(404).json({erro: `${siglaEstado} não é um estado válido.`});
  }
  res.json(dadosEstado[0].cidades);
}


function obterProdutos(req, res){
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
  res.json(produtos);
}

module.exports = {
  finalizarCompra,
  obterCidadesPorEstado,
  obterProdutos
}
