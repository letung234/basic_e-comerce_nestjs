import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class authDto {
  @ApiProperty({
    type: String,
    example: 'quangle222233@gmail.com',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
