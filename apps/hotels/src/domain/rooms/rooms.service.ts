import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddRoomDto } from './rooms.dto';

@Injectable()
export class RoomsService {
  constructor(private readonly prisma: PrismaService) {}

  addRooms(room: AddRoomDto) {
    return this.prisma.room.create({
      data: {
        ...room,
      },
    });
  }
}
