import { User } from '../models/user.model'

export interface IVideo {
  path: string
  imagePath?: string
  user: User
}
