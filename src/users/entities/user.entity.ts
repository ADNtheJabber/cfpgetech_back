import { Role } from 'src/role/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    email:string;

    @Column({ length: 50}) 
    password:string;

    @ManyToMany(type => Role, { cascade: true })
    @JoinTable({
    name: 'role_use_user',
    joinColumn: { name: 'id', referencedColumnName: 'id'},
    inverseJoinColumn: { name: 'id', referencedColumnName: 'id'},
    })
    roles: Role[];

    @Column() 
    isActive:boolean;
}