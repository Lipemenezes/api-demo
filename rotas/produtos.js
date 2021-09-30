const router = require('express').Router()
const controllerProduto = require('../controllers/produto')

router.get('/', async (req, res) => {
  const produtos = await controllerProduto.listaTodosProdutos()

  return res.json(produtos)
})

router.get('/:id_produto', async (req, res) => {
  const produto = await controllerProduto.listaUmProduto(req.params.id_produto)

  return res.json({ produto })
})

router.post('/', async (req, res) => {
  const produto = await controllerProduto.criaProduto(req.body)

  return res.json({ produto })
})

router.patch('/:id_produto', async (req, res) => {
  await controllerProduto.atualizaProduto(req.params.id_produto, req.body)

  return res.json({ message: 'ok' })
})

router.delete('/:id_produto', async (req, res) => {
  await controllerProduto.removeProduto(req.params.id_produto)

  return res.json({ message: 'ok' })
})

module.exports = router