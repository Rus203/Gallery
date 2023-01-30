import { Request, Response } from 'express'
import { userInfoService } from '../services/user-info.service'

import answer from '../utils/answer'
import { StatusCodes } from 'http-status-codes'
import { UserInfo } from '../models/user-info.model'

class UserInfoController {
  async getOne (request: Request, response: Response): Promise<void> {
    const parameters: object = request.params
    const user: UserInfo | null = await userInfoService.getOne(parameters)
    response.send(user)
  }

  async getAll (request: Request, response: Response): Promise<void> {
    const parameters: object = { ...request.params, ...request.body }
    const users: UserInfo[] = await userInfoService.getAll(parameters)
    response.send(users)
  }

  async update (request: Request, response: Response): Promise<void> {
    const id: string = request.params.id
    const parameters = request.body
    await userInfoService.update(id, parameters)
    response.send(answer('User info was updated'))
  }

  async delete (request: Request, response: Response): Promise<void> {
    const id: string = request.params.id
    await userInfoService.delete(id)
    response.status(StatusCodes.NO_CONTENT).send()
  }
}

export const userInfoController = new UserInfoController()
