import { ApiProperty } from '@nestjs/swagger';
import { RoomType } from '@hotels/prisma';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class RoomDto {
  @ApiProperty({ enum: RoomType, required: true })
  @IsEnum(RoomType)
  @IsNotEmpty()
  type: RoomType;

  @ApiProperty({ type: Number, required: true })
  price: number;

  @ApiProperty({ type: Number, required: true })
  number: number;

  @ApiProperty({ type: Object, required: true })
  aminities: Record<string, any>;

  @ApiProperty({ type: Number, required: true })
  hotelId: number;
}

export class AddRoomDto extends RoomDto {
}
