import { Injectable } from '@nestjs/common';
import { PetCategory } from '../models/pet-category.model';

@Injectable()
export class PetCategoryRepository {
  findAll() {
    return PetCategory.findAll();
  }
}
