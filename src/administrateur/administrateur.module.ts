import { Module } from '@nestjs/common';
import { AdministrateurService } from './administrateur.service';
import { AdministrateurController } from './administrateur.controller';
import { Administrateur } from './entities/administrateur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Administrateur])],
  controllers: [AdministrateurController],
  providers: [AdministrateurService]
})
export class AdministrateurModule {}
