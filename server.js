// Creando el servidor con express
const express = require('express')
const app = express()
const port = 3000

const morgan = require('morgan')
app.use(morgan('dev'))

app.set('port', process.env.port || 3000)

// Importamos las routes creadas del archivo indes.js
app.use(require('./routes/index'))

// Se ejecuta el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})