import { Router } from 'express'

import videoRouter from './video.router'
import videoInfoRouter from './video-info.router'
import authRouter from './auth.router'
import userRouter from './user.router'
import userInfoRouter from './user-info.router'
import commentRouter from './comment.router'

const rootRouter: Router = Router()

rootRouter.use('/auth', authRouter)
rootRouter.use('/video', videoRouter)
rootRouter.use('/video-info', videoInfoRouter)
rootRouter.use('/user', userRouter)
rootRouter.use('/user-info', userInfoRouter)
rootRouter.use('/comment', commentRouter)

export default rootRouter
