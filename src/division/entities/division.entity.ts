import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('division')
export class Division {
    @PrimaryGeneratedColumn({
        type:'int',
        name:'id'
    })
    id: number;

    @Column('varchar',{ 
        name:'libelle',
        length: 100 })
    libelle:string;

}
