import {
  Entity, Column, OneToMany, OneToOne, JoinColumn,
  PrimaryGeneratedColumn, BaseEntity
} from 'typeorm'
import { IChannel } from '../interfaces/IChannel'
import { Video } from './Video'
import { User } from './User'
import { AvatarPath } from './AvatarPath'

@Entity('channels')
export class Channel extends BaseEntity implements IChannel {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'varchar', unique: true })
    name: string

  @Column({ type: 'date', name: 'created_at', nullable: true })
    createdAt: Date

  @Column({ type: 'date', name: 'updated_at', nullable: true })
    updatedAt: Date

  @OneToMany(() => Video, video => video.channel)
    videos: Video[]

  @OneToOne(() => User, user => user.channel)
  @JoinColumn({ name: 'user_id' })
    user: User

  @OneToOne(() => AvatarPath, avatarPath => avatarPath.channel)
    avatarPath: AvatarPath
}
