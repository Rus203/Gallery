import { Router } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

const authRouter = Router()

authRouter.post('/signUp', (request, response) => {
  response.status(StatusCodes.OK).send('Signing up. Not implement yet')
})

authRouter.post('/signIn', (request, response) => {
  response.status(StatusCodes.OK).send('Sinning in. Posting request.' +
    'Not implement yet')
})

export default authRouter
