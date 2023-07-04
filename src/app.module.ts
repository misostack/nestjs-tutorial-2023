// src/app.module.ts

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PetModule } from './pet/pet.module';
import { SequelizeModule } from '@nestjs/sequelize';
import models from './pet/models';

@Module({
  imports: [
    // public folder
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
      serveRoot: '/public',
    }),
    PetModule,
    SequelizeModule.forRoot({
      uri: 'mysql://root:123456@localhost/nestjs_tutorial_2023',
      dialect: 'mysql',
      models: models,
      logging: console.log,
    }),
  ],
  providers: [],
})
export class AppModule {}
