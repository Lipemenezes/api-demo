const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const produtos = [
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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/produtos', (req, res) => {
  return res.json(produtos)
})

app.get('/produtos/:id_produto', (req, res) => {
  const produto = produtos.find(prod => prod.id === Number(req.params.id_produto))

  return res.json({ produto })
})

app.post('/produtos', (req, res) => {
  const produto = req.body
  produto.id = produtos.length + 1

  produtos.push(produto)

  return res.json({ produto })
})

app.patch('/produtos/:id_produto', (req, res) => {
  const indiceProduto = produtos.findIndex(prod => prod.id === Number(req.params.id_produto))

  const produtoNovo = produtos[indiceProduto]

  produtoNovo.quantidade = req.body.quantidade
  produtoNovo.preco = req.body.preco

  produtos[indiceProduto] = produtoNovo

  return res.json({ produtoNovo })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})