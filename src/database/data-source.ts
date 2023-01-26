import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { User } from '../models/user.model'
import { Video } from '../models/video.model'
import { Comment } from '../models/comment.model'
import { UserInfo } from '../models/user-info.model'
import { VideoInfo } from '../models/video-info.model'

import * as dotenv from 'dotenv'
dotenv.config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Video, Comment, UserInfo, VideoInfo]
})
