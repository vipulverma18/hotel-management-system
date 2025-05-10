import { Module } from '@nestjs/common';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [HotelsController],
  providers: [PrismaService, HotelsService],
})
export class HotelsModule {}
