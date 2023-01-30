import {
  Entity, Column, OneToOne, PrimaryGeneratedColumn,
  BaseEntity, CreateDateColumn, UpdateDateColumn, JoinColumn
} from 'typeorm'

import { User } from './user.model'

@Entity('user_info')
export class UserInfo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'varchar' })
    description: string

  @Column({ type: 'varchar', name: 'image_path' })
    imagePath: string

  @Column({ type: 'varchar' })
    name: string

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

  @OneToOne(() => User, user => user.userInfo, { cascade: true })
  @JoinColumn({ name: 'user_id' })
    user: User
}
