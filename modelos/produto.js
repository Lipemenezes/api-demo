const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProdutosSchema = new Schema({
  nome: String,
  quantidade: Number,
  preco: Number
})

module.exports = mongoose.model('Produto', ProdutosSchema)
