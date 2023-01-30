import { Router } from 'express'

import { userInfoController } from '../controllers/user-info.controller'
import { trackStatus } from '../middleware/track_status.middleware'

const userInfoRouter = Router()

userInfoRouter.get('/:id', userInfoController.getOne)
userInfoRouter.get('/', userInfoController.getAll)

userInfoRouter.put('/:id', userInfoController.update)
userInfoRouter.delete('/:id', userInfoController.delete)

export default userInfoRouter
