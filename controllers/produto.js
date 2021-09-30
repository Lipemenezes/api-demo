const Produto = require('../modelos/produto')

const listaTodosProdutos = async () => {
  const produtos = await Produto.find()

  return produtos
}

const listaUmProduto = async (id) => {
  const produto = await Produto.findOne({ _id: id })

  return produto
}

const criaProduto = async (produtoInfo) => {
  const produto = new Produto(produtoInfo)
  await produto.save()

  return produto
}

const atualizaProduto = async (id, produtoInfo) => {
  const resposta = await Produto.updateOne({ _id: id }, produtoInfo)

  if (resposta.modifiedCount != 1) {
    throw new Error('Nao atualizou o produto')
  }

  return true
}

const removeProduto = async (id) => {
  const resposta = await Produto.deleteOne({ _id: id })

  if (resposta.deletedCount != 1) {
    throw new Error('Nao apagou o produto')
  }

  return true
}

module.exports = {
  listaTodosProdutos,
  listaUmProduto, 
  criaProduto,
  atualizaProduto,
  removeProduto,
}