import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class orderDto {
  @ApiProperty({ type: Number, example: 2500, required: true })
  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;
}
