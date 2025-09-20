const { Router } = require("express");
const router = Router()

//Envia un GET que dice 'Hola Mundo'
router.get('/', (req, res) => {
  res.json({'titulo': 'Hola Mundo'})
})

module.exports = router