import { Router } from 'express'

import { authController } from '../controllers/auth.controller'
import trackStatus from '../middleware/track_status.middleware'

const authRouter = Router()

authRouter.post('/signUp', trackStatus(authController.singUp))

authRouter.post('/signIn', trackStatus(authController.singIn))

export default authRouter
