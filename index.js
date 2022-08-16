import express from 'express'

const server = express()

server.get('/test', (req, res) => {
  return res.json({ message: 'hello world' })
})
console.log("uai")
server.listen(3000)
