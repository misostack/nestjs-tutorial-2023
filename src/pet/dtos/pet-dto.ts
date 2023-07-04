import { IsNotEmpty, MaxLength } from 'class-validator';

class CreatePetCategoryDto {
  @MaxLength(50)
  @IsNotEmpty()
  name: string;
}

export { CreatePetCategoryDto };
