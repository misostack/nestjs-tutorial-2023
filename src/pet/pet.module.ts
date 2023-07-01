// src/pet/pet.module.ts

import { Module } from '@nestjs/common';
import { PetController } from './controllers/pet.controller';
import { ManagePetController } from './controllers/admin/manage-pet.controller';
import { ManagePetCategoryController } from './controllers/admin/manage-pet-category.controller';
import { ManagePetAttributeController } from './controllers/admin/manage-pet-attribute.controller';

@Module({
  controllers: [
    PetController,
    ManagePetController,
    ManagePetCategoryController,
    ManagePetAttributeController,
  ],
})
export class PetModule {}
