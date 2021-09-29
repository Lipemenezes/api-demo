const router = require('express').Router()

let produtos = [
  {
    "id": 1,
    "nome": "batata kg",
    "quantidade": 10,
    "preco": 5
  },
  {
    "id": 2,
    "nome": "tomate kg",
    "quantidade": 10,
    "preco": 5
  },
  {
    "id": 3,
    "nome": "pessego kg",
    "quantidade": 10,
    "preco": 5
  },
]

router.get('/', (req, res) => {
  return res.json(produtos)
})

router.get('/:id_produto', (req, res) => {
  const produto = produtos.find(prod => prod.id === Number(req.params.id_produto))

  return res.json({ produto })
})

router.post('/', (req, res) => {
  const produto = req.body
  produto.id = produtos.length + 1

  produtos.push(produto)

  return res.json({ produto })
})

router.patch('/:id_produto', (req, res) => {
  const indiceProduto = produtos.findIndex(prod => prod.id === Number(req.params.id_produto))

  const produtoNovo = produtos[indiceProduto]

  produtoNovo.quantidade = req.body.quantidade
  produtoNovo.preco = req.body.preco

  produtos[indiceProduto] = produtoNovo

  return res.json({ produtoNovo })
})

router.delete('/:id_produto', (req, res) => {
  const idProduto = Number(req.params.id_produto)
  produtos = produtos.filter(prod => prod.id !== idProduto)

  return res.json({ produtos })
})

module.exports = router