import {
  Entity, Column, OneToOne, OneToMany,
  PrimaryGeneratedColumn, BaseEntity
} from 'typeorm'

import { IUser } from '../interfaces/user.interface'

import { UserInfo } from './user-info.model'
import { Video } from './video.model'
import { Comment } from './comment.model'

@Entity('users')
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'varchar', unique: true })
    email: string

  @Column({ type: 'varchar' })
    password: string

  @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[]

  @OneToMany(() => Video, video => video.user)
    videos: Video[]

  @OneToOne(() => UserInfo, userInfo => userInfo.user)
    userInfo: UserInfo
}
