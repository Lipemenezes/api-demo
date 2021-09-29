const router = require('express').Router()

let carros = [
  {
    "id": 1,
    "nome": "celta",
    "quantidade": 10,
    "preco": 5
  },
  {
    "id": 2,
    "nome": "corsa",
    "quantidade": 10,
    "preco": 5
  },
  {
    "id": 3,
    "nome": "del rey",
    "quantidade": 10,
    "preco": 5
  },
]

router.get('/', (req, res) => {
  return res.json(carros)
})

router.get('/:id_carro', (req, res) => {
  const carro = carros.find(prod => prod.id === Number(req.params.id_carro))

  return res.json({ carro })
})

router.post('', (req, res) => {
  const carro = req.body
  carro.id = carros.length + 1

  carros.push(carro)

  return res.json({ carro })
})

router.patch('/:id_carro', (req, res) => {
  const indicecarro = carros.findIndex(prod => prod.id === Number(req.params.id_carro))

  const carroNovo = carros[indicecarro]

  carroNovo.quantidade = req.body.quantidade
  carroNovo.preco = req.body.preco

  carros[indicecarro] = carroNovo

  return res.json({ carroNovo })
})

router.delete('/:id_carro', (req, res) => {
  const idcarro = Number(req.params.id_carro)
  carros = carros.filter(prod => prod.id !== idcarro)

  return res.json({ carros: carros })
})

module.exports = router