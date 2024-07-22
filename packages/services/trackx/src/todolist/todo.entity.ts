import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";
import { User } from "../login-service/login-entity";

@Entity('todolist')

export class TodoEntity {
    @PrimaryGeneratedColumn('increment', {
        name: "id"
    })
    id: number

    @Column('varchar', {
        name: 'task',
        nullable: true
    })
    task: string;

    @Column('varchar', {
        name: 'description',
        nullable: true
    })
    description: string;
    

    @Column("boolean", {
        nullable: false,
        default: true,
        name: "is_active"
    })
    isActive: boolean;


    @Column("varchar", {
        nullable: true,
        length: 40,
        name: 'created_user'
    })
    createdUser: string | null;

    @CreateDateColumn({
        name: "created_at"
    })
    createdAt: Date;

    @Column("varchar", {
        nullable: true,
        length: 40,
        name: "updated_user"
    })
    updatedUser: string | null;

    @UpdateDateColumn({
        name: "updated_at"
    })
    updatedAt: Date;

    @VersionColumn({
        default: 1,
        name: 'version_flag'
    })
    versionFlag: number;

    @ManyToOne(() => User, user => user.todos)
    user: User;


}