import {
  Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn,
  BaseEntity
} from 'typeorm'
import { IVideoPath } from '../interfaces/IVideoPath'
import { Video } from './Video'

@Entity('video_paths')
export class VideoPath extends BaseEntity implements IVideoPath {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'varchar', unique: true })
    path: string

  @OneToOne(() => Video, video => video.videoPath)
  @JoinColumn({ name: 'video_id ' })
    video: Video
}
