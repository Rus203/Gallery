import { Video } from '../models/video.model'
import { Opinion } from '../utils/opinion.enum'

export interface IVideoInfo {
  video: Video
  title: string
  description: string
  opinion?: Opinion
  views?: number
  tags?: []
}
