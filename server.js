const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const rotasProduto = require('./rotas/produtos')
const rotasCarro = require('./rotas/carro')

const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/produtos', rotasProduto)

app.use('/carros', rotasCarro)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app