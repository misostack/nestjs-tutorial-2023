import { Controller, Get, Param, Post, Render } from '@nestjs/common';

@Controller('admin/pet-categories')
export class ManagePetCategoryController {
  @Get('')
  getList() {
    return 'admin pet categories';
  }

  @Get('create')
  @Post('create')
  @Render('pet/admin/manage-pet-category/create')
  create() {
    // a form
    return {};
  }

  @Get(':id')
  getDetail(@Param() { id }: { id: string }) {
    return `admin pet category detail ${id}`;
  }
}
