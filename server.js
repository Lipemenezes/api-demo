const express = require('express')
const mongoose = require('mongoose')
require('express-async-errors')
const bodyParser = require('body-parser')
const app = express()
const errorHandler = require('./middlewares/errorHandler')
const rotasProduto = require('./rotas/produtos')

const port = 3000

const conectaBanco = () => {
  mongoose.connect('mongodb://localhost:27017/exemplo')
  console.log('Conectado no banco')
}

conectaBanco()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/produtos', rotasProduto)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


module.exports = app