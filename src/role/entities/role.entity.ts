import { type } from "os";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('role')
export class Role {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        })
    id: number;
    
    @Column({ length: 50 })
    libelle:string;
    
    @OneToOne(type => User, user => user.id )
    users: User[];
}
