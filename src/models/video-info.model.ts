import {
  Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn,
  BaseEntity, CreateDateColumn, UpdateDateColumn
} from 'typeorm'

import { Video } from './video.model'

import { Opinion } from '../utils/opinion.enum'

@Entity('video_info')
export class VideoInfo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'varchar' })
    title: string

  @Column({ type: 'varchar' })
    description: string

  @Column({ type: 'enum', enum: Opinion, default: Opinion.UNDEFINED })
    opinion: Opinion

  @Column({ type: 'int', default: 0 })
    views: number

  @Column({ type: 'simple-array', default: [] })
    tags: [string]

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

  @OneToOne(() => Video, video => video.videoInfo, { cascade: true })
  @JoinColumn({ name: 'video_id ', referencedColumnName: 'id' })
    video: Video
}
