import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DivisionModule } from './division/division.module';
import { DepartementModule } from './departement/departement.module';
import { ProgrammeModule } from './programme/programme.module';
import { CandidatureModule } from './candidature/candidature.module';
import { CandidatModule } from './candidat/candidat.module';
import { ProfilModule } from './profil/profil.module';
import { AdministrateurModule } from './administrateur/administrateur.module';
import { RoleModule } from './role/role.module';
import { AdresseModule } from './adresse/adresse.module';
import { FormationModule } from './formation/formation.module';

@Module({
  imports: [
    UsersModule, 
    DivisionModule, 
    DepartementModule, 
    ProgrammeModule, 
    CandidatureModule, 
    CandidatModule, 
    ProfilModule, 
    AdministrateurModule, 
    RoleModule, 
    AdresseModule, 
    FormationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
