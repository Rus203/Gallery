import { Router } from 'express'

import { videoController } from '../controllers/video.controller'

const videoRouter = Router()

videoRouter.get('/:id', videoController.getOne)
videoRouter.get('/', videoController.getAll)

videoRouter.put('/:id', videoController.update)
videoRouter.delete('/:id', videoController.delete)

export default videoRouter
