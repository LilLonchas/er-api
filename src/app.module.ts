import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AlumnoModule } from './alumno/alumno.module';
import { ProfesorModule } from './profesor/profesor.module';
import { PracticaModule } from './practica/practica.module';
import { ExamenTeoricoModule } from './examen_teorico/examen_teorico.module';
import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AlumnoModule,
    ProfesorModule,
    PracticaModule,
    ExamenTeoricoModule,
    EvaluacionModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
