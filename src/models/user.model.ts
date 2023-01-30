import {
  Entity, Column, OneToOne, OneToMany, BeforeInsert,
  BeforeUpdate, PrimaryGeneratedColumn, BaseEntity
} from 'typeorm'

import * as bcrypt from 'bcrypt'

import { UserInfo } from './user-info.model'
import { Video } from './video.model'
import { Comment } from './comment.model'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'varchar', unique: true })
    email: string

  @Column({ type: 'text', select: false })
    password: string

  @BeforeUpdate()
  @BeforeInsert()
  async hashPassword (): Promise<void> {
    this.password = await bcrypt.hash(this.password, 12)
  }

  @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[]

  @OneToMany(() => Video, video => video.user)
    videos: Video[]

  @OneToOne(() => UserInfo, userInfo => userInfo.user)
    userInfo: UserInfo
}
