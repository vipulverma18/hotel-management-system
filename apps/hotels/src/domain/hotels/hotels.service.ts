import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './hotels.dto';

@Injectable()
export class HotelsService {
  constructor(private readonly prisma: PrismaService) {}

  create(hotel: CreateHotelDto) {
    return this.prisma.hotel.create({
      data: {
        ...hotel,
      },
    });
  }
}
