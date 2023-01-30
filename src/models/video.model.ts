import {
  Entity, Column, ManyToOne, BaseEntity, RelationId,
  OneToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany
} from 'typeorm'

import { User } from './user.model'
import { VideoInfo } from './video-info.model'
import { Comment } from './comment.model'

@Entity('videos')
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'varchar' })
    path: string

  @Column({ type: 'varchar', name: 'image_path' })
    imagePath: string

  @ManyToOne(() => User, user => user.videos, { cascade: true })
  @JoinColumn({ name: 'user_id' })
    user: User

  @RelationId((video: Video) => video.user)
    userId: string

  @OneToOne(() => VideoInfo, videoInfo => videoInfo.video)
    videoInfo: VideoInfo

  @OneToMany(() => Comment, comment => comment.video)
    comments: Comment[]
}
