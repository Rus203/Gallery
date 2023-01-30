import { commentRepository } from '../repositories/comment.repository'
import { Comment } from '../models/comment.model'
import { IComment } from '../interfaces/comment.interface'

class CommentService {
  async getOne (parameters: object): Promise<Comment | null> {
    const comments: Comment[] = await this.getAll(parameters)
    return comments.length > 0 ? comments[0] : null
  }

  async getAll (parameters: object): Promise<Comment[]> {
    return await commentRepository.get(parameters)
  }

  async create (parameters: IComment): Promise<Comment> {
    return await commentRepository.create(parameters)
  }

  async update (id: string, parameters: object): Promise<void> {
    await commentRepository.update(id, parameters)
  }

  async delete (id: string): Promise<void> {
    await commentRepository.delete(id)
  }
}

export const commentService = new CommentService()
