import { Router } from 'express'

import { videoInfoController } from '../controllers/video-info.controller'
import trackStatus from '../middleware/track_status.middleware'

const videoInfoRouter = Router()

videoInfoRouter.get('/', videoInfoController.getAll)
videoInfoRouter.get(':id', videoInfoController.getAll)
videoInfoRouter.post('/', trackStatus(videoInfoController.create))
videoInfoRouter.put('/:id', trackStatus(videoInfoController.update))
videoInfoRouter.delete('/:id', videoInfoController.delete)

export default videoInfoRouter
