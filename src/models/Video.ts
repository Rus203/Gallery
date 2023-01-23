import {
  Entity, Column, ManyToOne, BaseEntity,
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

  @Column({ type: 'date', name: 'created_at', nullable: true })
    createdAt: Date

  @Column({ type: 'date', name: 'updated_at', nullable: true })
    updatedAt: Date

  @ManyToOne(() => Channel, channel => channel.videos)
  @JoinColumn({ name: 'channel_id' })
    channel: Channel

  @OneToOne(() => VideoPath, videoPath => videoPath.video)
    videoPath: VideoPath
}
