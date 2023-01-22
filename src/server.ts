import * as express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()
const server: express.Application = express()
const PORT: number = +(process.env.PORT ?? 8080)

server.get('/', (request, response) => {
  response.json({ status: true, message: 'Our node.js app works' })
})

server.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}/`)
})
