import { Candidature } from "src/candidature/entities/candidature.entity";
import { Departement } from "src/departement/entities/departement.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('programme')
export class Programme {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        })
    id: number;

    @Column('varchar', {
        nullable: false,
        name: 'libelle',
        length: 60 }
        )
    libelle:string;

    @Column('varchar', {
        nullable: false,
        name: 'syllabus',
        length: 80 }
        )
    syllabus:string;


    @Column('date',{
        nullable: false,
        name: 'dateDebut',
    })
    dateDebut:Date;

    @Column('varchar',{
        nullable: false,
        name: 'duree'
    })
    duree:String;

    @ManyToOne(type => Departement, departement => departement.id)
    departement: Departement;
    
    @OneToMany(() => Candidature, candidature => candidature.id)
    candidatures: Candidature[];
    
    @ManyToOne(type => User, user => user.id)
    user: User;
}
