import { Repository } from 'typeorm'

import { Comment } from '../models/comment.model'
import { AppDataSource } from '../database/data-source'
import { IComment } from '../interfaces/comment.interface'

class CommentRepository {
  readonly rep: Repository<Comment>
  constructor () {
    this.rep = AppDataSource.getRepository(Comment)
  }

  async get (parameters: object): Promise<Comment[]> {
    return await this.rep.findBy(parameters)
  }

  async create (parameters: IComment): Promise<Comment> {
    return await this.rep.create(parameters).save()
  }

  async update (id: string, parameters: object): Promise<void> {
    await this.rep.update(id, parameters)
  }

  async delete (id: string): Promise<void> {
    await this.rep.delete({ id })
  }
}

export const commentRepository = new CommentRepository()
