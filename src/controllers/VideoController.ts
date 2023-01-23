import { ReasonPhrases, StatusCodes } from 'http-status-codes'

import { IVideo } from '../interfaces/IVideo'
import { VideoServices } from '../services/videoServices'

import { Request, Response } from 'express'

const videoServices = new VideoServices()

export class VideoController {
  // async getOne (request: Request, response: Response): IVideo {

  // }

  async getAll (request: Request, response: Response): Promise<void> {
    const videos: IVideo[] = await videoServices.getAll()
    response.send(videos)
  }

  async post (request: Request, response: Response): Promise<void> {
    const parameters: IVideo = request.body
    await videoServices.create(parameters)
    response.send('success')
  }

  // async update (request: Request, response: Response): IVideo {

  // }

  async delete (request: Request, response: Response): Promise<void> {
    const id: string = request.body.id
    await videoServices.delete(id)
    response.status(StatusCodes.NO_CONTENT).send()
  }
}
