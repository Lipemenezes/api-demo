const server = require('../server')
const request = require('supertest')

test('get /produtos funciona', async () => {
  const response = await request(server).get('/produtos')

  expect(
    response.body
  ).toEqual(
    expect.arrayContaining([
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
    ])
  )
  
})

test('get /produtos/1 funciona', async () => {
  const response = await request(server).get('/produtos/1')

  expect(
    response.body
  ).toMatchObject({
    "produto": {
      "id": 1,
      "nome": "batata kg",
      "quantidade": 10,
      "preco": 5
    }
  })
})
