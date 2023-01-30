import { userController } from '../controllers/user.controller'

import trackStatus from '../middleware/track_status.middleware'

import { Router } from 'express'

const userRouter = Router()

userRouter.get('/:id', userController.getOne)
userRouter.get('/', userController.getAll)

userRouter.put('/:id', userController.update)
userRouter.delete('/:id', userController.delete)

export default userRouter
