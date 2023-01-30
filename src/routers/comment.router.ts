import { Router } from 'express'

import { commentController } from '../controllers/comment.controller'
import trackStatus from '../middleware/track_status.middleware'

const commentRouter = Router()

commentRouter.get('/', commentController.getAll)
commentRouter.get(':id', commentController.getAll)
commentRouter.post('/', trackStatus(commentController.create))
commentRouter.put('/:id', trackStatus(commentController.update))
commentRouter.delete('/:id', commentController.delete)

export default commentRouter
