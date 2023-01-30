import { Repository } from 'typeorm'

import { VideoInfo } from '../models/video-info.model'

import { AppDataSource } from '../database/data-source'
import { IVideoInfo } from '../interfaces/video-info.interface'

class VideoInfoRepository {
  readonly repository: Repository<VideoInfo>
  constructor () {
    this.repository = AppDataSource.getRepository(VideoInfo)
  }

  async get (parameters: object): Promise<VideoInfo[]> {
    return await this.repository.findBy(parameters)
  }

  async create (parameters: IVideoInfo): Promise<VideoInfo> {
    return await this.repository.create(parameters).save()
  }

  async update (id: string, parameters: object): Promise<void> {
    await this.repository.update(id, parameters)
  }

  async delete (id: string): Promise<void> {
    await this.repository.delete({ id })
  }
}

export const videoInfoRepository = new VideoInfoRepository()
