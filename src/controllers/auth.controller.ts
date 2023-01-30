import { StatusCodes } from 'http-status-codes'
import { Request, Response } from 'express'

import { userService } from '../services/user.service'
import { BadRequest } from '../errors/bad-request.error'
import answer from '../utils/answer'
import { generateTokens } from '../utils/token'

import { userInfoService } from '../services/user-info.service'

import * as bcrypt from 'bcrypt'
import { User } from '../models/user.model'

class AuthController {
  async singUp (request: Request, response: Response): Promise<void> {
    const { email, password, ...other } = request.body

    const candidate = await userService.getOne({ email })
    if (candidate !== null) {
      throw new BadRequest('Sorry, but this email ' +
      'has already existed')
    }

    const user: User = await userService.create({ password, email })
    console.log('user', user)
    response.status(StatusCodes.CREATED).send(answer('The user was created'))
  }

  async singIn (request: Request, response: Response): Promise<void> {
    const { email, password } = request.body

    const user: User | null = await userService
      .getOne({ email, hasPassword: true })

    if (user === null) {
      throw new BadRequest('Sorry, but this email ' +
      'hasn\'t existed yet')
    }

    const isCorrectPas = await bcrypt.compare(password, user.password)
    console.log('user pas', user.password)
    if (!isCorrectPas) {
      throw new BadRequest('The wrong passport')
    }

    const data: object = { userId: user.id, email: user.email }
    const tokens = generateTokens(data)

    // by default 1 hour
    const cookiesTimeLive: number = +(process.env.TIME_LIVE_COOKIE ?? 3600000)
    response
      .cookie('tokens', tokens,
        { httpOnly: true, expires: new Date(Date.now() + cookiesTimeLive) })
      .send(answer('You are signed in'))
  }
}

export const authController = new AuthController()
