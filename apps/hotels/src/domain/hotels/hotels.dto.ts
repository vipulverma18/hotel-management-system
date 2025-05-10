import { ApiProperty } from '@nestjs/swagger';

export class CreateHotelDto {
  @ApiProperty({ type: String, required: true })
  city: string;

  @ApiProperty({ type: String, required: true })
  street: string;

  @ApiProperty({ type: String, required: true })
  state: string;

  @ApiProperty({ type: String, required: true })
  pincode: string;
}
