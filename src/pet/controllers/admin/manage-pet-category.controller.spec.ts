import { Test, TestingModule } from '@nestjs/testing';
import { ManagePetCategoryController } from './manage-pet-category.controller';

describe('ManagePetCategoryController', () => {
  let controller: ManagePetCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagePetCategoryController],
    }).compile();

    controller = module.get<ManagePetCategoryController>(
      ManagePetCategoryController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
