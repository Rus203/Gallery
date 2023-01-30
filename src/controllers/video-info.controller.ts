import { Request, Response } from 'express'
import { videoInfoService } from '../services/video-info.service'

import answer from '../utils/answer'
import { StatusCodes } from 'http-status-codes'
import { videoService } from '../services/video.service'
import { VideoInfo } from '../models/video-info.model'

class VideoInfoController {
  async getOne (request: Request, response: Response): Promise<void> {
    const parameters: object = request.params
    const videoInfo: null | VideoInfo = await videoInfoService
      .getOne(parameters)
    response.send(videoInfo)
  }

  async create (request: Request, response: Response): Promise<void> {
    const { path, imagePath, userId, ...other } = request.body
    // const video = await videoService.create({ path, imagePath, user })
    await videoInfoService.create(other)
    response.status(StatusCodes.CREATED).send(answer('The video was created'))
  }

  async getAll (request: Request, response: Response): Promise<void> {
    const parameters: object = { ...request.params, ...request.body }
    const videoInfo = await videoInfoService.getAll(parameters)
    response.send(videoInfo)
  }

  async update (request: Request, response: Response): Promise<void> {
    const id: string = request.params.id
    const parameters = request.body
    await videoInfoService.update(id, parameters)
    response.send(answer('The video info was updated'))
  }

  async delete (request: Request, response: Response): Promise<void> {
    const id: string = request.params.id
    await videoInfoService.delete(id)
    response.status(StatusCodes.NO_CONTENT).send()
  }
}

export const videoInfoController = new VideoInfoController()
