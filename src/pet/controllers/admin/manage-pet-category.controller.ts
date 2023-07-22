import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Redirect,
  Render,
} from '@nestjs/common';
import { CreatePetCategoryDto } from 'src/pet/dtos/pet-dto';
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { FormDataRequest } from 'nestjs-form-data';
import { PetCategory } from 'src/pet/models/pet-category.model';
import { Response } from 'express';
import { PetCategoryRepository } from 'src/pet/repositories/pet-category.repository';

const transformError = (error: ValidationError) => {
  const { property, constraints } = error;
  return {
    property,
    constraints,
  };
};
@Controller('admin/pet-categories')
export class ManagePetCategoryController {
  constructor(private petCategoryRepository: PetCategoryRepository) {}
  @Get('')
  @Render('pet/admin/manage-pet-category/list')
  async getList() {
    const petCategories = await this.petCategoryRepository.findAll();
    return {
      petCategories,
    };
  }

  @Post('delete/:id')
  @Redirect('/admin/pet-categories/')
  async deleteOne(@Param() { id }: { id: string }) {
    await PetCategory.destroy({ where: { id } });
  }

  @Get('create')
  @Render('pet/admin/manage-pet-category/create')
  view_create() {
    // a form
    return {
      data: {
        mode: 'create',
      },
    };
  }

  @Post('create')
  @Render('pet/admin/manage-pet-category/create')
  @FormDataRequest()
  async create(@Body() createPetCategoryDto: CreatePetCategoryDto) {
    const data = {
      mode: 'create',
    };
    // validation
    const object = plainToInstance(CreatePetCategoryDto, createPetCategoryDto);
    const errors = await validate(object, {
      stopAtFirstError: true,
    });
    if (errors.length > 0) {
      Reflect.set(data, 'error', 'Please correct all fields!');
      const responseError = {};
      errors.map((error) => {
        const rawError = transformError(error);
        Reflect.set(
          responseError,
          rawError.property,
          Object.values(rawError.constraints)[0],
        );
      });
      Reflect.set(data, 'errors', responseError);
      return { data };
    }
    // set value and show success message
    Reflect.set(data, 'values', object);

    // create PetCategory
    const newPetCategory = await PetCategory.create({ ...object });

    Reflect.set(
      data,
      'success',
      `Pet Category : ${newPetCategory.id} - ${newPetCategory.name} has been created!`,
    );
    // success
    return { data };
  }

  @Get(':id')
  @Render('pet/admin/manage-pet-category/create')
  async getDetail(@Param() { id }: { id: string }) {
    const data = {
      mode: 'edit',
    };
    const petCategory = await PetCategory.findByPk(id);
    Reflect.set(data, 'values', petCategory);
    return { data };
  }

  @Post(':id')
  @Render('pet/admin/manage-pet-category/create')
  @FormDataRequest()
  async updateOne(
    @Param() { id }: { id: string },
    @Body() createPetCategoryDto: CreatePetCategoryDto,
  ) {
    const data = {
      mode: 'edit',
    };
    const petCategory = await PetCategory.findByPk(id);
    // validation
    const object = plainToInstance(CreatePetCategoryDto, createPetCategoryDto);
    const errors = await validate(object, {
      stopAtFirstError: true,
    });
    if (errors.length > 0) {
      Reflect.set(data, 'error', 'Please correct all fields!');
      const responseError = {};
      errors.map((error) => {
        const rawError = transformError(error);
        Reflect.set(
          responseError,
          rawError.property,
          Object.values(rawError.constraints)[0],
        );
      });
      Reflect.set(data, 'errors', responseError);
      return { data };
    }
    // set value and show success message
    await petCategory.update(object);

    Reflect.set(data, 'values', petCategory);
    return { data };
  }
}
