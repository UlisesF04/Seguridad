// Inicio del servidor del Node JS
const http = require('http')

const hostname = "127.0.0.1"
const port = "5000"

const server = http.createServer((req, res) => {
  // Establece el código de estado (200 OK)
  res.statusCode = 200
  
  // Establece el tipo de contenido usando setHeader()
  res.setHeader('Content-Type', 'text/plain')

  // Envía la respuesta al cliente
  res.end("Sexito")
})

// El servidor inicia a travez del puerto y el hostname
server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});