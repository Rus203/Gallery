import { IVideoInfo } from '../interfaces/video-info.interface'
import { VideoInfo } from '../models/video-info.model'
import { videoInfoRepository } from '../repositories/video-info.repository'

class VideoInfoService {
  async getOne (parameters: object): Promise<VideoInfo | null> {
    const userInfo: VideoInfo[] = await this.getAll(parameters)
    return userInfo.length > 0 ? userInfo[0] : null
  }

  async getAll (parameters: object): Promise<VideoInfo[]> {
    return await videoInfoRepository.get(parameters)
  }

  async create (parameters: IVideoInfo): Promise<VideoInfo> {
    return await videoInfoRepository.create(parameters)
  }

  async update (id: string, parameters: object): Promise<void> {
    await videoInfoRepository.update(id, parameters)
  }

  async delete (id: string): Promise<void> {
    await videoInfoRepository.delete(id)
  }
}

export const videoInfoService = new VideoInfoService()
