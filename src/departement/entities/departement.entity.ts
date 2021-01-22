import { Programme } from "src/programme/entities/programme.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('departement')
export class Departement {
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

    @ManyToOne(type => Departement, departement => departement.id)
    departement: Departement;
    
    @OneToMany(() => Programme, programme => programme.id)
    programmes: Programme[];
    
    @ManyToOne(type => User, user => user.id)
    user: User;
}
