import { Repository } from 'typeorm'

import { User } from '../models/user.model'

import { AppDataSource } from '../database/data-source'
import { IUser } from '../interfaces/user.interface'

class UserRepository {
  readonly repository: Repository<User>
  constructor () {
    this.repository = AppDataSource.getRepository(User)
  }

  async get (body: { hasPassword?: boolean, id?: string }): Promise<User[]> {
    const { hasPassword = false, ...parameters } = body
    return await this.repository.find({
      select: {
        id: true,
        password: hasPassword,
        email: true
      },
      where: parameters
    })
  }

  async create (parameters: IUser): Promise<User> {
    return await this.repository.create(parameters).save()
  }

  async update (id: string, parameters: object): Promise<void> {
    await this.repository.update(id, parameters)
  }

  async delete (id: string): Promise<void> {
    await this.repository.delete({ id })
  }
}

export const userRepository = new UserRepository()
