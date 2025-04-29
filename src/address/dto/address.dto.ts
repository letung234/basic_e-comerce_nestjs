import {
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class addressDto {
  @ApiProperty({ type: String, example: 'vietnam', required: true })
  @IsString()
  @IsNotEmpty()
  @Matches(/^([\p{L}\d.,]+\s{1})*[\p{L}\d.,]+$/u, {
    message:
      'Invalid country. Only letters, digits, dots, commas and single spaces are allowed.',
  })
  country: string;

  @ApiProperty({ type: String, example: '35-haiphong', required: true })
  @IsString()
  @IsNotEmpty()
  @Matches(/^([\p{L}\d.,]+\s{1})*[\p{L}\d.,]+$/u, {
    message:
      'Invalid country. Only letters, digits, dots, commas and single spaces are allowed.',
  })
  physicalAddress: string;

  @ApiProperty({ type: String, example: 'Le', required: true })
  @IsString()
  @IsNotEmpty()
  @Matches(/^([\p{L}\d.,]+\s{1})*[\p{L}\d.,]+$/u, {
    message:
      'Invalid country. Only letters, digits, dots, commas and single spaces are allowed.',
  })
  firstName: string;

  @ApiProperty({ type: String, example: 'Van', required: true })
  @IsString()
  @IsNotEmpty()
  @Matches(/^([\p{L}\d.,]+\s{1})*[\p{L}\d.,]+$/u, {
    message:
      'Invalid country. Only letters, digits, dots, commas and single spaces are allowed.',
  })
  lastName: string;

  @ApiProperty({ type: Number, example: 13, required: false })
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  apartmentNumber: number;

  @ApiProperty({ type: String, example: 'HaiPhong', required: true })
  @IsString()
  @IsNotEmpty()
  @Matches(/^([\p{L}\d.,]+\s{1})*[\p{L}\d.,]+$/u, {
    message:
      'Invalid country. Only letters, digits, dots, commas and single spaces are allowed.',
  })
  city: string;

  @ApiProperty({ type: String, example: 'HiaPhong', required: true })
  @IsString()
  @IsNotEmpty()
  @Matches(/^([\p{L}\d.,]+\s{1})*[\p{L}\d.,]+$/u, {
    message:
      'Invalid country. Only letters, digits, dots, commas and single spaces are allowed.',
  })
  governorate: string;

  @ApiProperty({ type: Number, example: 11511, required: true })
  @IsNumber()
  @IsNotEmpty()
  postalCode: number;

  @ApiProperty({ type: String, example: '+8410640413' })
  @IsMobilePhone()
  @IsNotEmpty()
  phoneNumber: string;
}
