import { Test, TestingModule } from '@nestjs/testing';
import { PromotionsController } from './promotions.controller';
import { PromotionsService } from './promotions.service';

describe('PromotionsController', () => {
  let promotionsController: PromotionsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PromotionsController],
      providers: [PromotionsService],
    }).compile();

    promotionsController = app.get<PromotionsController>(PromotionsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(promotionsController.getHello()).toBe('Hello World!');
    });
  });
});
