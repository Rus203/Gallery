import {
  Entity, Column, OneToOne, PrimaryGeneratedColumn,
  BaseEntity
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

  @Column({ type: 'date', name: 'created_at', nullable: true })
    createdAt: Date

  @Column({ type: 'date', name: 'updated_at', nullable: true })
    updatedAt: Date

  @OneToOne(() => Channel, channel => channel.user)
    channel: Channel
}
