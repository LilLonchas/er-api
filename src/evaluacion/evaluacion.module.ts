import { Module } from '@nestjs/common';
import { EvaluacionController } from './evaluacion.controller';
import { EvaluacionService } from './evaluacion.service';

@Module({
  controllers: [EvaluacionController],
  providers: [EvaluacionService]
})
export class EvaluacionModule {}
