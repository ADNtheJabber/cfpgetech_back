import { User } from "src/users/entities/user.entity";
import { Adresse } from "src/adresse/entities/adresse.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('administrateur')
export class Administrateur {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        })
    id: number;

    @Column('varchar', {
        nullable: false,
        name: 'matricule',
        length: 60 }
        )
    matricule:string;

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

    @OneToOne(type => User, user => user.id)
    user: User;
}
