import { Administrateur } from 'src/administrateur/entities/administrateur.entity';
import { Candidat } from 'src/candidat/entities/candidat.entity';
import { Role } from 'src/role/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne } from 'typeorm';

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    email:string;

    @Column({ length: 50}) 
    password:string;

    @OneToOne(type => Administrateur, administrateur => administrateur.id)
    administrateur: Administrateur;

    @OneToOne(type => Candidat, candidat => candidat.id)
    candidat: Candidat;

    @OneToOne(type => Role, role => role.id)
    role: Role;
    
    @Column() 
    isActive:boolean;
}