// src/pet/pet.module.ts

import { Module } from '@nestjs/common';
import { PetController } from './controllers/pet.controller';
import { ManagePetController } from './controllers/admin/manage-pet.controller';
import { ManagePetCategoryController } from './controllers/admin/manage-pet-category.controller';
import { ManagePetAttributeController } from './controllers/admin/manage-pet-attribute.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { PetCategoryRepository } from './repositories/pet-category.repository';
import { PetCategoryProvider } from './providers/pet-category.provider';
@Module({
  imports: [NestjsFormDataModule],
  controllers: [
    PetController,
    ManagePetController,
    ManagePetCategoryController,
    ManagePetAttributeController,
  ],
  providers: [PetCategoryRepository, PetCategoryProvider],
})
export class PetModule {}
