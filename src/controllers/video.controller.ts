import { StatusCodes } from 'http-status-codes'

import { videoService } from '../services/video.service'

import { Request, Response } from 'express'
import answer from '../utils/answer'
import { Video } from '../models/video.model'

class VideoController {
  async getOne (request: Request, response: Response): Promise<void> {
    const parameters: object = request.params
    const video: Video | null = await videoService.getOne(parameters)
    response.send(video)
  }

  async getAll (request: Request, response: Response): Promise<void> {
    const parameters: object = { ...request.body, ...request.query }
    const videos: Video[] = await videoService.getAll(parameters)
    response.send(videos)
  }

  async update (request: Request, response: Response): Promise<void> {
    const id: string = request.params.id
    const parameters = request.body
    await videoService.update(id, parameters)
    response.send(answer('The video was updated'))
  }

  async delete (request: Request, response: Response): Promise<void> {
    const id: string = request.params.id
    console.log('id', id)
    await videoService.delete(id)
    response.status(StatusCodes.NO_CONTENT).send()
  }
}

export const videoController = new VideoController()
