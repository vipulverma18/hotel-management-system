import { RoomType } from '@inventory/prisma';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class InventoryDto {
  @ApiProperty({ type: Date, required: true })
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @ApiProperty({ type: Number, required: true })
  @IsNumber()
  @IsNotEmpty()
  total: number;

  @ApiProperty({ type: Number, required: true })
  @IsNumber()
  @IsNotEmpty()
  hotelId: number;

  @ApiProperty({ enum: RoomType, required: true })
  @IsEnum(RoomType)
  @IsNotEmpty()
  roomType: RoomType;
}

export class AddInventoryDto extends InventoryDto {}
