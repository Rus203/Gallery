import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import helmet from 'helmet'

import rootRoute from './routers'
import { connectToDatabase } from './database/typeorm.connection'

import notFoundMiddleware from './middleware/not-found.middleware'
import errorHandleMiddleware from './middleware/error-handle.middleware'

const PORT: number = +(process.env.PORT ?? 6000)
const server: express.Application = express()

server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(cookieParser())
server.use(helmet())

server.use('/api', rootRoute)

server.use('/*', notFoundMiddleware)
server.use(errorHandleMiddleware)

connectToDatabase()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running: http://localhost:${PORT}/`)
    })
  })
  .catch(error => { console.log(error) })
