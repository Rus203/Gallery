import { User } from '../models/user.model'
import { Video } from '../models/video.model'

export interface IComment {
  user: User
  video: Video
  description: string
}
