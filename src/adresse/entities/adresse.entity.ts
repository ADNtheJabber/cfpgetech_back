import { Administrateur } from "src/administrateur/entities/administrateur.entity";
import { Candidat } from "src/candidat/entities/candidat.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('adresse')
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

    @OneToMany(type => Administrateur, administrateur => administrateur.id)
    @JoinColumn({name: "id"})   
    administrateur: Administrateur;
}
