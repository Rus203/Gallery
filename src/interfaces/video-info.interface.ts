import { Opinion } from '../utils/opinion.enum'

export interface IVideoInfo {
  id?: string
  videoId?: string
  title: string
  description: string
  opinion: Opinion
  views: number
  tags: [string]
  createdAt?: Date
  updatedAt?: Date
}
