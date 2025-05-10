import { RoomsService } from './rooms.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AddRoomDto } from './rooms.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  addRooms(@Body() room: AddRoomDto) {
    return this.roomsService.addRooms(room);
  }
}
