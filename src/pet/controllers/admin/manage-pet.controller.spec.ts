import { Test, TestingModule } from '@nestjs/testing';
import { ManagePetController } from './manage-pet.controller';

describe('ManagePetController', () => {
  let controller: ManagePetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagePetController],
    }).compile();

    controller = module.get<ManagePetController>(ManagePetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
