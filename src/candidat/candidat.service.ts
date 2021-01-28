import { Injectable } from '@nestjs/common';

// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository, getRepository, DeleteResult } from 'typeorm';

// import { Adresse } from 'src/adresse/entities/adresse.entity';
// import { Profil } from 'src/profil/entities/profil.entity';
// import { Candidat } from './entities/candidat.entity';
// import { Candidature } from 'src/candidature/entities/candidature.entity';

@Injectable()
export class CandidatService {

  constructor(
    // @InjectRepository(Candidat)
    // private readonly candidatRepository: Repository<Candidat>,
    // @InjectRepository(Adresse)
    // private readonly adresseRepository: Repository<Adresse>,
    // @InjectRepository(Candidature)
    // private readonly candidatureRepository: Repository<Candidature>,
    // @InjectRepository(Profil)
    // private readonly profilRepository: Repository<Profil>
  ) {}


  // async findAll(query): Promise<Candidat> {

  //   const qb = await getRepository(Candidat)
  //     .createQueryBuilder('candidat')
  //     .leftJoinAndSelect('candidat.profil', 'profil')      
  //     .leftJoinAndSelect('candidat.adresse', 'adresse')
  //     .leftJoinAndSelect('candidat.candidature', 'candidature')
  //     ;

  //   qb.where("1 = 1");

  //   qb.orderBy('candidat.id', 'DESC');

  //   const candidatsCount = await qb.getCount();

  //   if ('limit' in query) {
  //     qb.limit(query.limit);
  //   }

  //   if ('offset' in query) {
  //     qb.offset(query.offset);
  //   }

  //   const candidats = await qb.getMany();

  //   return {
  //           candidats,
  //           candidatsCount
  //         };
  
  // }

  
  // async findOne(where): Promise<Candidat> {
  //   const candidat = await this.candidatRepository.findOne(where);
  //   return candidat;
  // }

  
  
  // async create(candidat: Candidat): Promise<Candidat> {

  //   let c = new Candidat();
  //   c.nom = candidat.nom;
  //   c.prenom = candidat.prenom;
  //   c.dateNaissance = candidat.dateNaissance;
  //   c.lieuNaissance = candidat.lieuNaissance;
  //   c.telephone = candidat.telephone;
  //   c.genre = candidat.genre;    
  //   c.adresse.pays = candidat.adresse.pays;
  //   c.adresse.ville = candidat.adresse.ville;    
  //   c.profil = candidat.profil;
    



  //   const newCandidat = await this.candidatRepository.save(c);

  //   return newCandidat;

  // }

  // async update(candidat: Candidat): Promise<Candidat> {
  //   let toUpdate = await this.candidatRepository.findOne({ id: candidat.id});
  //   let updated = Object.assign(toUpdate, candidat);
  //   const c = await this.candidatRepository.save(updated);
  //   return c;
  // }

  // async delete(candidat: Candidat): Promise<DeleteResult> {
  //   return await this.candidatRepository.delete({ id: candidat.id});
  // }
}