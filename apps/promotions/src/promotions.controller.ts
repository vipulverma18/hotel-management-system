import { Controller, Get } from '@nestjs/common';
import { PromotionsService } from './promotions.service';

@Controller()
export class PromotionsController {
  constructor(private readonly promotionsService: PromotionsService) {}

  @Get()
  getHello(): string {
    return this.promotionsService.getHello();
  }
}
