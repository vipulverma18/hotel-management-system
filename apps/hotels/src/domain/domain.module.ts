import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { HotelsModule } from './hotels/hotels.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [HotelsModule, RoomsModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DomainModule {}
