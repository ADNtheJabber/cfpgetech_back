import { Candidat } from "src/candidat/entities/candidat.entity";
import { Programme } from "src/programme/entities/programme.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('candidature')
export class Candidature {
    @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    })
    id: number;

    @Column('varchar',{ length: 50 })
    codeCandidature:string;

    @Column('date',{
        nullable: false
    })
    dateCandidature: string;

    @Column({})
    isApprouved: boolean;

    @ManyToMany(type => Candidat, { cascade: true })
    @JoinTable({
    name: 'candidat_use_candidature',
    joinColumn: { name: 'id', referencedColumnName: 'id'},
    inverseJoinColumn: { name: 'id', referencedColumnName: 'id'},
    })
    candidats: Candidat[];

    @ManyToOne(type => Programme, programme => programme.id)
    programme: Programme;
}
