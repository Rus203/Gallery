import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { User } from '../models/user.model'

import { userService } from '../services/user.service'

import answer from '../utils/answer'

class UserController {
  async getOne (request: Request, response: Response): Promise<void> {
    const parameters: object = request.params
    const user: User | null = await userService.getOne(parameters)
    response.send(user)
  }

  async getAll (request: Request, response: Response): Promise<void> {
    const parameters: object = { ...request.body, ...request.query }
    const users: User[] = await userService.getAll(parameters)
    response.send(users)
  }

  async update (request: Request, response: Response): Promise<void> {
    const id: string = request.params.id
    const parameters: object = request.body
    await userService.update(id, parameters)
    response.send(answer('User was updated'))
  }

  async delete (request: Request, response: Response): Promise<void> {
    const id: string = request.params.id
    await userService.delete(id)
    response.status(StatusCodes.NO_CONTENT).send()
  }
}

export const userController = new UserController()
