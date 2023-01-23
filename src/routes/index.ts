import { Router } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

import videoRouter from './videoRouter'
import authRouter from './authRouter'

const rootRoute: Router = Router()

rootRoute.get('/', (request, response) => {
  response.send('Welcome. I\'ll try to do my best to perform all your' +
    'requests correctly')
})

rootRoute.use('/auth', authRouter)
rootRoute.use('/video', videoRouter)
rootRoute.all('/*', (request, response) => {
  response.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND)
})

export default rootRoute
