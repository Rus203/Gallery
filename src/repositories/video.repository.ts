import { Repository } from 'typeorm'

import { Video } from '../models/video.model'
import { AppDataSource } from '../database/data-source'
import { IVideo } from '../interfaces/video.interface'

class VideoRepository {
  readonly rep: Repository<Video>
  constructor () {
    this.rep = AppDataSource.getRepository(Video)
  }

  async get (parameters: object): Promise<Video[]> {
    return await this.rep.findBy(parameters)
  }

  async create (parameters: IVideo): Promise<Video> {
    return await this.rep.create(parameters).save()
  }

  async update (id: string, parameters: object): Promise<void> {
    await this.rep.update(id, parameters)
  }

  async delete (id: string): Promise<void> {
    await this.rep.delete({ id })
  }
}

export const videoRepository = new VideoRepository()
