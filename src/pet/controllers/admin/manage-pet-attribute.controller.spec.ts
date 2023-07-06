import { Test, TestingModule } from '@nestjs/testing';
import { ManagePetAttributeController } from './manage-pet-attribute.controller';

describe('ManagePetAttributeController', () => {
  let controller: ManagePetAttributeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagePetAttributeController],
    }).compile();

    controller = module.get<ManagePetAttributeController>(
      ManagePetAttributeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
