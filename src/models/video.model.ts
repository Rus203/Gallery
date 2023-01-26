import {
  Entity, Column, ManyToOne, BaseEntity,
  OneToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany
} from 'typeorm'

import { IVideo } from '../interfaces/video.interface'

import { User } from './user.model'
import { VideoInfo } from './video-info.model'
import { Comment } from './comment.model'

@Entity('videos')
export class Video extends BaseEntity implements IVideo {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    path: string

  @Column({ name: 'image_path' })
    imagePath: string

  @ManyToOne(() => User, user => user.videos)
  @JoinColumn({ name: 'user_id' })
    user: User

  @OneToOne(() => VideoInfo, videoInfo => videoInfo.video)
    videoInfo: VideoInfo

  @OneToMany(() => Comment, comment => comment.video)
    comments: Comment[]
}
