import {
  Entity, Column, ManyToOne, BaseEntity,
  CreateDateColumn, UpdateDateColumn,
  OneToOne, JoinColumn, PrimaryGeneratedColumn
} from 'typeorm'
import { IVideo } from '../interfaces/IVideo'
import { Channel } from './Channel'
import { VideoPath } from './videoPath'

@Entity('videos')
export class Video extends BaseEntity implements IVideo {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'varchar' })
    name: string

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

  @ManyToOne(() => Channel, channel => channel.videos)
  @JoinColumn({ name: 'channel_id' })
    channel: Channel

  @OneToOne(() => VideoPath, videoPath => videoPath.video)
    videoPath: VideoPath
}
