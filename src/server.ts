import * as express from 'express'

import rootRoute from './routes'
import { AppDataSource } from './database/data-source'

const server: express.Application = express()
const PORT: number = +(process.env.PORT ?? 5000)

server.use(express.urlencoded({ extended: false }))
server.use(express.json())

server.use('/api', rootRoute)

AppDataSource.initialize()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running: http://localhost:${PORT}/`)
    })
  })
  .catch(error => { console.log(error) })
