import {
  Entity, Column, ManyToOne, BaseEntity,
  CreateDateColumn, UpdateDateColumn,
  JoinColumn, PrimaryGeneratedColumn
} from 'typeorm'

import { IComment } from '../interfaces/comments.interface'

import { User } from './user.model'
import { Video } from './video.model'

@Entity('comments')
export class Comment extends BaseEntity implements IComment {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    description: string

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

  @ManyToOne(() => User, user => user.comments)
  @JoinColumn({ name: 'user_id' })
    user: User

  @ManyToOne(() => Video, video => video.comments)
  @JoinColumn({ name: 'video_id' })
    video: Video
}
