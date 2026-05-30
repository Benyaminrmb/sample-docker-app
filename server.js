const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h1>DeployMate sample app</h1><p>Deployed at: ' + new Date().toISOString() + '</p>')
})

server.listen(3000, () => console.log('Running on port 3000'))
