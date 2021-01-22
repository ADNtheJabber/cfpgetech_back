import { Adresse } from "src/adresse/entities/adresse.entity";
import { Candidature } from "src/candidature/entities/candidature.entity";
import { Profil } from "src/profil/entities/profil.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @Column('varchar',{
        nullable: false,
        name: 'genre'
    })
    genre:String;

    @ManyToOne(type => Adresse, adresse => adresse.id)
    adresse: Adresse;
    
    @ManyToMany(type => Candidature, { cascade: true })
    @JoinTable({
    name: 'candidature_use_candidat',
    joinColumn: { name: 'id', referencedColumnName: 'id'},
    inverseJoinColumn: { name: 'id', referencedColumnName: 'id'},
    })
    candidatures: Candidature[];

    @ManyToOne(type => Profil, profil => profil.id)
    profil: Profil;
}
