import { Router } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

import { VideoController } from '../controllers/VideoController'

const videoRoute = Router()
const videoController = new VideoController()

videoRoute.get('/', videoController.getAll)
videoRoute.post('/', videoController.post)

videoRoute.put('/', (request, response) => {
  response.status(StatusCodes.OK).send('Putting request. Not implement yet')
})

videoRoute.delete('/', videoController.delete)

export default videoRoute
