import { Adresse } from "src/adresse/entities/adresse.entity";
import { Profil } from "src/profil/entities/profil.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('candidat')
export class Candidat {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        })
    id: number;

    @Column('varchar', {
        nullable: false,
        name: 'nom',
        length: 60 }
        )
    nom:string;

    @Column('varchar', {
        nullable: false,
        name: 'prenom',
        length: 80 }
        )
    prenom:string;


    @Column('date',{
        nullable: false,
        name: 'dateNaissance',
    })
    dateNaissance:Date;

    @Column('varchar',{
        nullable: false,
        name: 'lieuNaissance'
    })
    lieuNaissance:String;

    @Column('varchar',{
        nullable: false,
        name: 'telephone'
    })
    telephone:String;

    @ManyToOne(type => Adresse, adresse => adresse.id)
    adresse: Adresse;

    @ManyToOne(type => Profil, profil => profil.id)
    profil: Profil;
}
