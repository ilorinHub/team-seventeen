import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class signupDto {
  @ApiProperty({
    description: 'email address to sign up',
    example: 'foobar@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'user fullName' })
  @IsString()
  @MinLength(8, {
    message: 'the user fullName',
  })
  @MaxLength(200, {
    message: 'the user fullName should not exceed 200 characters',
  })
  fullName: string;

  @ApiProperty({ description: 'user phone number' })
  @IsMobilePhone('en-NG')
  phoneNumber: string;

  @ApiProperty({ description: 'facility name' })
  @IsString()
  @IsOptional()
  @MinLength(11, {
    message: 'facility name should not be less than 5 characters',
  })
  @MaxLength(11, {
    message: 'facility name should not exceed 50 characters',
  })
  facilityName: string;

  @ApiProperty({ description: 'facility address' })
  @IsString()
  @IsOptional()
  @MinLength(11, {
    message: 'facility address should not be less than 5 characters',
  })
  @MaxLength(11, {
    message: 'facility address should not exceed 500 characters',
  })
  facilityAddress: string;

  @ApiProperty({ description: 'the state' })
  @IsString()
  @IsOptional()
  @MinLength(11, {
    message: 'state should not be less than 3 characters',
  })
  @MaxLength(11, {
    message: 'state should not exceed 100 characters',
  })
  state: string;

  @ApiProperty({ description: 'the medical license number' })
  @IsString()
  @IsOptional()
  @MinLength(11, {
    message: 'medical license number should not be less than 10 characters',
  })
  @MaxLength(11, {
    message: 'medical license number should not exceed 100 characters',
  })
  medicalLicenseNumber: string;

  @ApiProperty({ description: 'the mdcn number' })
  @IsString()
  @IsOptional()
  @MinLength(11, {
    message: 'mdcn number should not be less than 10 characters',
  })
  @MaxLength(11, {
    message: 'mdcn number should not exceed 100 characters',
  })
  mdcnNumber: string;

  @ApiProperty({ description: 'the lga' })
  @IsString()
  @IsOptional()
  @MinLength(11, {
    message: 'lga should not be less than 3 characters',
  })
  @MaxLength(11, {
    message: 'lga should not exceed 100 characters',
  })
  lga: string;

  @ApiProperty({ description: 'the state id' })
  @IsString()
  @IsOptional()
  @MinLength(11, {
    message: 'state id should not be less than 11 numbers',
  })
  @MaxLength(11, {
    message: 'state id should not exceed 11 numbers',
  })
  stateId: string;

  @ApiProperty({ description: 'password to sign up' })
  @IsString()
  @MinLength(8, {
    message: 'password should be at least 8 characters in length',
  })
  password: string;

  @ApiProperty({ description: 'confirm password to sign up' })
  @IsString()
  @MinLength(8, {
    message: 'confirm password should match password',
  })
  confirmPassword: string;
}
