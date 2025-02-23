import { Module } from '@nestjs/common';
import { ExamenTeoricoController } from './examen_teorico.controller';
import { ExamenTeoricoService } from './examen_teorico.service';

@Module({
  controllers: [ExamenTeoricoController],
  providers: [ExamenTeoricoService]
})
export class ExamenTeoricoModule {}
