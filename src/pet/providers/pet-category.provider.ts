import { PetCategory } from '../models/pet-category.model';

export const PetCategoryInjectionKey = 'Pet_Category';
export const PetCategoryProvider = {
  provide: PetCategoryInjectionKey,
  useValue: PetCategory,
};
