import { StatusCodes } from 'http-status-codes'
import { Comment } from '../models/comment.model'
import { commentService } from '../services/comment.service'

import { Request, Response } from 'express'
import answer from '../utils/answer'

class CommentController {
  async getOne (request: Request, response: Response): Promise<void> {
    const parameters: object = request.params
    const comment: Comment | null = await commentService.getOne(parameters)
    response.send(comment)
  }

  async getAll (request: Request, response: Response): Promise<void> {
    const parameters: object = { ...request.body, ...request.query }
    const comments = await commentService.getAll(parameters)
    response.send(comments)
  }

  async create (request: Request, response: Response): Promise<void> {
    const parameters = request.body
    await commentService.create(parameters)
    response.status(StatusCodes.CREATED).send(answer('The comment was created'))
  }

  async update (request: Request, response: Response): Promise<void> {
    const id: string = request.params.id
    const parameters = request.body
    await commentService.update(id, parameters)
    response.send(answer('The comment was updated'))
  }

  async delete (request: Request, response: Response): Promise<void> {
    const id: string = request.params.id
    await commentService.delete(id)
    response.status(StatusCodes.NO_CONTENT).send()
  }
}

export const commentController = new CommentController()
