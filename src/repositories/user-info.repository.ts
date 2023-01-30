import { Repository } from 'typeorm'

import { UserInfo } from '../models/user-info.model'
import { IUserInfo } from '../interfaces/user-info.interface'

import { AppDataSource } from '../database/data-source'

class UserInfoRepository {
  readonly repository: Repository<UserInfo>
  constructor () {
    this.repository = AppDataSource.getRepository(UserInfo)
  }

  async get (parameters: object): Promise<UserInfo[]> {
    return await this.repository.findBy(parameters)
  }

  async create (parameters: IUserInfo): Promise<UserInfo> {
    return await this.repository.create(parameters).save()
  }

  async update (id: string, parameters: object): Promise<void> {
    await this.repository.update(id, parameters)
  }

  async delete (id: string): Promise<void> {
    await this.repository.delete({ id })
  }
}

export const userInfoRepository = new UserInfoRepository()
