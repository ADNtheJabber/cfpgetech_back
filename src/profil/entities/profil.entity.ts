import { Candidat } from 'src/candidat/entities/candidat.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity('profil')
export class Profil {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{ 
        name:'libelle',
        length: 50 })
    libelle:string;

    @OneToMany(type => Candidat, candidat => candidat.id)
    @JoinColumn({name: "id"})   
    candidat: Candidat;
}