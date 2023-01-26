import { videoRepository } from '../repositories/video.repository'
import { IVideo } from '../interfaces/video.interface'

class VideoServices {
  async getOne (parameters: object): Promise<IVideo | null > {
    return await videoRepository.getOne(parameters)
  }

  async getAll (): Promise<IVideo[]> {
    return await videoRepository.getAll()
  }

  async create (parameters: IVideo): Promise<void> {
    await videoRepository.create(parameters)
  }

  async update (parameters: IVideo, id: string): Promise<void> {
    await videoRepository.update(parameters, id)
  }

  async delete (id: string): Promise<void> {
    await videoRepository.delete(id)
  }
}

export const videoServices = new VideoServices()
