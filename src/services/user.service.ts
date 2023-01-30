
import { userRepository } from '../repositories/user.repository'
import { User } from '../models/user.model'

import { IUser } from '../interfaces/user.interface'

class UserService {
  async getOne (parameters: object): Promise<User | null> {
    const users: User[] = await this.getAll(parameters)
    return users.length > 0 ? users[0] : null
  }

  async getAll (parameters: object): Promise<User[]> {
    return await userRepository.get(parameters)
  }

  async create (parameters: IUser): Promise<User> {
    return await userRepository.create(parameters)
  }

  async update (id: string, parameters: object): Promise<void> {
    await userRepository.update(id, parameters)
  }

  async delete (id: string): Promise<void> {
    await userRepository.delete(id)
  }
}

export const userService = new UserService()
