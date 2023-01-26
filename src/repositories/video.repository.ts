import { IVideo } from '../interfaces/video.interface'
import { Video } from '../models/video.model'
import { AppDataSource } from '../database/data-source'
import { ICrud } from '../interfaces/base.crud.interface'

class VideoRepository implements ICrud<IVideo> {
  async getOne (parameters: object): Promise<IVideo | null> {
    const video: IVideo | null = await AppDataSource
      .getRepository(Video)
      .createQueryBuilder('video')
      .where('video.id = :id OR video.name OR vide.channel_id', { parameters })
      .getOne()

    return video
  }

  async getAll (): Promise<IVideo[]> {
    const videos: IVideo [] = await AppDataSource
      .getRepository(Video)
      .createQueryBuilder('video')
      .getMany()

    return videos
  }

  async create (parameters: IVideo): Promise<void> {
    await AppDataSource
      .createQueryBuilder()
      .insert()
      .into(Video)
      .values(parameters)
      .execute()
  }

  async update (parameters: object, id: string): Promise<void> {
    await AppDataSource
      .createQueryBuilder()
      .update(Video)
      .set(parameters)
      .where('id = :id', { id })
      .execute()
  }

  async delete (id: string): Promise<void> {
    await AppDataSource
      .getRepository(Video)
      .createQueryBuilder('video')
      .delete()
      .from(Video)
      .where('id = :id', { id })
      .execute()
  }
}

export const videoRepository = new VideoRepository()
