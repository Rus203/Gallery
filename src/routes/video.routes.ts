import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

import { videoController } from '../controllers/video.controller'

const videoRoute = Router()

videoRoute.get('/:id', videoController.getOne)
videoRoute.get('/', videoController.getAll)
videoRoute.post('/', videoController.post)

videoRoute.put('/:id', videoController.update)
videoRoute.delete('/:id', videoController.delete)

export default videoRoute
