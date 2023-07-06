import { Controller, Get, Param } from '@nestjs/common';

@Controller('pets')
export class PetController {
  @Get('')
  getList() {
    return 'Pet List';
  }

  @Get(':id')
  getDetail(@Param() { id }: { id: number }) {
    return `Pet Detail ${id}`;
  }
}
