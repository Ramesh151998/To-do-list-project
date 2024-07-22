import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from "./login-entity"

@Entity('permission')
export class PermissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  permission: string;

  @ManyToOne(() => User, user => user.todos)
  user: User;
}
