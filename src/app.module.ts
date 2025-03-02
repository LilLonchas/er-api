import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AlumnoModule } from './evaluacion/alumno/alumno.module';
import { ExamenteoricoModule } from './evaluacion/examenteorico/examenteorico.module';
import { PracticaModule } from './evaluacion/practica/practica.module';
import { ProfesorModule } from './evaluacion/profesor/profesor.module';
import { DisenaModule } from './evaluacion/disena/disena.module';
import { RealizaModule } from './evaluacion/realiza/realiza.module';
import { HaceModule } from './evaluacion/hace/hace.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.URL,
      port: 3306,
      username: process.env.USER,
      password: process.env.PASS,
      database: process.env.EVALUACION,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AlumnoModule,
    ExamenteoricoModule,
    PracticaModule,
    ProfesorModule,
    DisenaModule,
    RealizaModule,
    HaceModule
  ],
})
export class AppModule {}
