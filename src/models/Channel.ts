import {
  Entity, Column, OneToMany, OneToOne, JoinColumn,
  PrimaryGeneratedColumn, BaseEntity, CreateDateColumn,
  UpdateDateColumn
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

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

  @OneToMany(() => Video, video => video.channel)
    videos: Video[]

  @OneToOne(() => User, user => user.channel)
  @JoinColumn({ name: 'user_id' })
    user: User

  @OneToOne(() => AvatarPath, avatarPath => avatarPath.channel)
    avatarPath: AvatarPath
}
