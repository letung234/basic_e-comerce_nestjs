import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class userInfoDto {
  @ApiProperty({ type: String, example: 'Tung', required: false })
  @IsString()
  firstName: string;

  @ApiProperty({ type: String, example: 'Le', required: false })
  @IsString()
  lastName: string;
}
