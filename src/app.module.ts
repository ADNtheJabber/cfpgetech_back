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
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { FaqModule } from './faq/faq.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
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
    AuthModule, 
    FaqModule,
    ConfigModule 
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
