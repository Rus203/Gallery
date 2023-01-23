import {
  Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn,
  BaseEntity
} from 'typeorm'
import { IAvatarPath } from '../interfaces/IAvatarPath'
import { Channel } from './Channel'

@Entity('avatar_paths')
export class AvatarPath extends BaseEntity implements IAvatarPath {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'varchar', unique: true })
    path: string

  @OneToOne(() => Channel, channel => channel.avatarPath)
  @JoinColumn({ name: 'channel_id' })
    channel: Channel
}
