import {
  Entity, Column, OneToOne, PrimaryGeneratedColumn,
  BaseEntity, CreateDateColumn, UpdateDateColumn
} from 'typeorm'
import { IUser } from '../interfaces/IUser'
import { Channel } from './Channel'

@Entity('users')
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ type: 'varchar' })
    name: string

  @Column({ type: 'varchar', unique: true })
    login: string

  @Column({ type: 'varchar' })
    password: string

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

  @OneToOne(() => Channel, channel => channel.user)
    channel: Channel
}
