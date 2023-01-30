import { UserInfo } from '../models/user-info.model'
import { userInfoRepository } from '../repositories/user-info.repository'
import { IUserInfo } from '../interfaces/user-info.interface'

class UserInfoService {
  async getOne (parameters: object): Promise<UserInfo | null> {
    const userInfo: UserInfo[] = await this.getAll(parameters)
    return userInfo.length > 0 ? userInfo[0] : null
  }

  async getAll (parameters: object): Promise<UserInfo[]> {
    return await userInfoRepository.get(parameters)
  }

  async create (parameters: IUserInfo): Promise<UserInfo> {
    return await userInfoRepository.create(parameters)
  }

  async update (id: string, parameters: object): Promise<void> {
    await userInfoRepository.update(id, parameters)
  }

  async delete (id: string): Promise<void> {
    await userInfoRepository.delete(id)
  }
}

export const userInfoService = new UserInfoService()
