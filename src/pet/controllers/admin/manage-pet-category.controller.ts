import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { CreatePetCategoryDto } from 'src/pet/dtos/pet-dto';
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { FormDataRequest } from 'nestjs-form-data';

const transformError = (error: ValidationError) => {
  const { property, constraints } = error;
  return {
    property,
    constraints,
  };
};
@Controller('admin/pet-categories')
export class ManagePetCategoryController {
  @Get('')
  getList() {
    return 'admin pet categories';
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
    Reflect.set(
      data,
      'success',
      `Pet Category : ${object.title} has been created!`,
    );
    // success
    return { data };
  }

  @Get(':id')
  getDetail(@Param() { id }: { id: string }) {
    return `admin pet category detail ${id}`;
  }
}
