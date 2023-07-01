import { Controller, Get, Param } from '@nestjs/common';

@Controller('admin/pet-attributes')
export class ManagePetAttributeController {
  @Get('')
  getList() {
    return 'admin pet attribute list';
  }

  @Get(':id')
  getDetail(@Param() { id }: { id: string }) {
    return `admin pet attribute detail ${id}`;
  }
}
