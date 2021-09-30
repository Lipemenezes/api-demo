const router = require('express').Router()
const Produto = require('../modelos/produto')

router.get('/', async (req, res) => {
  const produtos = await Produto.find()

  return res.json(produtos)
})

router.get('/:id_produto', async (req, res) => {
  const produto = await Produto.findOne({ _id: req.params.id_produto })

  return res.json({ produto })
})

router.post('/', async (req, res) => {
  const produto = new Produto(req.body)
  await produto.save()

  return res.json({ produto })
})

router.patch('/:id_produto', async (req, res) => {
  const resposta = await Produto.updateOne({ _id: req.params.id_produto }, req.body)

  if (resposta.modifiedCount != 1) {
    return res.status(500).json({ message: 'Nao atualizou nada' })
  }

  return res.json({ resposta })
})

router.delete('/:id_produto', async (req, res) => {
  const resposta = await Produto.deleteOne({ _id: req.params.id_produto })

  if (resposta.deletedCount != 1) {
    return res.status(500).json({ message: 'Nao deletou nada' })
  }

  return res.json({ resposta })
})

module.exports = router