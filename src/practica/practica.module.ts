import { Module } from '@nestjs/common';
import { PracticaController } from './practica.controller';
import { PracticaService } from './practica.service';

@Module({
  controllers: [PracticaController],
  providers: [PracticaService]
})
export class PracticaModule {}
