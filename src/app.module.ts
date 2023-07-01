// src/app.module.ts

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [
    // public folder
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
      serveRoot: '/public',
    }),
    PetModule,
  ],
  providers: [],
})
export class AppModule {}
