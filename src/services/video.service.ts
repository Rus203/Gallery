import { Video } from '../models/video.model'
import { videoRepository } from '../repositories/video.repository'
import { IVideo } from '../interfaces/video.interface'

class VideoService {
  async getOne (parameters: object): Promise<Video | null> {
    const videos: Video[] = await this.getAll(parameters)
    return videos.length > 0 ? videos[0] : null
  }

  async getAll (parameters: object): Promise<Video[]> {
    return await videoRepository.get(parameters)
  }

  async create (parameters: IVideo): Promise<Video> {
    return await videoRepository.create(parameters)
  }

  async update (id: string, parameters: object): Promise<void> {
    await videoRepository.update(id, parameters)
  }

  async delete (id: string): Promise<void> {
    await videoRepository.delete(id)
  }
}

export const videoService = new VideoService()
