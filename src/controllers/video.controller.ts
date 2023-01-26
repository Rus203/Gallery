import { StatusCodes } from 'http-status-codes'

import { IVideo } from '../interfaces/video.interface'
import { videoServices } from '../services/video.service'

import { Request, Response } from 'express'

class VideoController {
  async getOne (request: Request, response: Response): Promise<void> {
    const parameters = { id: request.params.id, ...request.query }
    const video = await videoServices.getOne(parameters)
    response.send(video)
  }

  async getAll (request: Request, response: Response): Promise<void> {
    const videos: IVideo[] = await videoServices.getAll()
    response.send(videos)
  }

  async post (request: Request, response: Response): Promise<void> {
    const parameters: IVideo = request.body
    await videoServices.create(parameters)
    response.status(StatusCodes.CREATED).send('success')
  }

  async update (request: Request, response: Response): Promise<void> {
    const id: string = request.params.id
    const parameters = request.body
    await videoServices.update(parameters, id)
  }

  async delete (request: Request, response: Response): Promise<void> {
    const id: string = request.params.id
    await videoServices.delete(id)
    response.status(StatusCodes.NO_CONTENT).send()
  }
}

export const videoController = new VideoController()
