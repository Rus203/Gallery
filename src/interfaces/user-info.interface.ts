import { User } from '../models/user.model'

export interface IUserInfo {
  user: User
  description: string
  imagePath?: string
  name: string
}
