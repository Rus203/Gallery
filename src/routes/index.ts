import { Router } from 'express'

import videoRouter from './video.routes'
import authRouter from './auth.routes'

const rootRoute: Router = Router()

rootRoute.use('/auth', authRouter)
rootRoute.use('/video', videoRouter)

export default rootRoute
