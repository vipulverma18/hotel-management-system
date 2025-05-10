import { NestFactory } from '@nestjs/core';
import { PromotionsModule } from './promotions.module';

async function bootstrap() {
  const app = await NestFactory.create(PromotionsModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
