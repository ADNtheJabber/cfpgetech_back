import { Candidat } from "src/candidat/entities/candidat.entity";
import { Column, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Adresse {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        })
    id: number;

    @Column('varchar', {
        nullable: false,
        name: 'pays'}
        )
    pays:string;

    @Column('varchar', {
        nullable: false,
        name: 'ville'}
        )
    ville:string;

    @OneToMany(type => Candidat, candidat => candidat.id)
    @JoinColumn({name: "id"})   
    candidat: Candidat;
}
