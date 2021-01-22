import { Module } from '@nestjs/common';
import { CandidatureService } from './candidature.service';
import { CandidatureController } from './candidature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidature } from './entities/candidature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Candidature])],
  controllers: [CandidatureController],
  providers: [CandidatureService]
})
export class CandidatureModule {}
