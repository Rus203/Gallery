import {
  Entity, Column, OneToOne, PrimaryGeneratedColumn,
  BaseEntity, CreateDateColumn, UpdateDateColumn, JoinColumn
} from 'typeorm'

import { IUserInfo } from '../interfaces/user-info.interface'

import { User } from './user.model'

@Entity('user_info')
export class UserInfo extends BaseEntity implements IUserInfo {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    description: string

  @Column({ name: 'image_path' })
    imagePath: string

  @Column()
    name: string

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

  @OneToOne(() => User, user => user.userInfo)
  @JoinColumn({ name: 'user_id' })
    user: User
}
