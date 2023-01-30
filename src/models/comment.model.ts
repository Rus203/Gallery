import {
  Entity, Column, ManyToOne, BaseEntity,
  CreateDateColumn, UpdateDateColumn,
  JoinColumn, PrimaryGeneratedColumn
} from 'typeorm'

import { User } from './user.model'
import { Video } from './video.model'

@Entity('comments')
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'varchar' })
    description: string

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

  @ManyToOne(() => User, user => user.comments, { cascade: true })
  @JoinColumn({ name: 'user_id' })
    user: User

  @ManyToOne(() => Video, video => video.comments, { cascade: true })
  @JoinColumn({ name: 'video_id' })
    video: Video
}
