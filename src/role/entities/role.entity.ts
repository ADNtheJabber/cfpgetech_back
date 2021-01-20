import { User } from "src/users/entities/user.entity";
import { Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export class Role {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        })
    id: number;
    
    @Column({ length: 50 })
    libelle:string;
    
    @ManyToMany(type => User, { cascade: true })
    @JoinTable({
    name: 'user_use_role',
    joinColumn: { name: 'id', referencedColumnName: 'id'},
    inverseJoinColumn: { name: 'id', referencedColumnName: 'id'},
    })
    users: User[];
}
