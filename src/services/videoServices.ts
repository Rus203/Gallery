import { IVideo } from '../interfaces/IVideo'
import { Video } from '../models/Video'
import { AppDataSource } from '../database/data-source'

export class VideoServices {
  // async getOne (): {}
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
  // async put() {}

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
