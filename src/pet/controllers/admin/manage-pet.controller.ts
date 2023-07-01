import { Controller, Get, Param } from '@nestjs/common';

@Controller('admin/pets')
export class ManagePetController {
  @Get('')
  getList() {
    return 'admin pet list';
  }

  @Get(':id')
  getDetail(@Param() { id }: { id: string }) {
    return `admin pet detail ${id}`;
  }
}
