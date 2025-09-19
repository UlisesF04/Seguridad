// Creando el servidor con express
const express = require('express')
const app = express()
const port = 3000

//Envia un GET que dice 'Hola Mundo'
app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

// Se ejecuta el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})