import {
  Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn,
  BaseEntity, CreateDateColumn, UpdateDateColumn
} from 'typeorm'

import { IVideoInfo } from '../interfaces/video-info.interface'

import { Video } from './video.model'

import { Opinion } from '../utils/opinion.enum'

@Entity('video_info')
export class VideoInfo extends BaseEntity implements IVideoInfo {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    title: string

  @Column()
    description: string

  @Column({ type: 'enum', enum: Opinion, default: Opinion.UNDEFINED })
    opinion: Opinion

  @Column()
    views: number

  @Column({ type: 'simple-array' })
    tags: [string]

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

  @OneToOne(() => Video, video => video.videoInfo)
  @JoinColumn({ name: 'video_id ' })
    video: Video
}
