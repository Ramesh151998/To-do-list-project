import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PermissionEntity } from "./todo.entity";

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => PermissionEntity, todo => todo.user)
  todos: PermissionEntity[];
}
