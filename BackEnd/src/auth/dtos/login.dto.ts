import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'email address to login',
    example: 'foobar@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'password to login' })
  @IsString()
  @MinLength(8, {
    message: 'password should be at least 8 characters in length',
  })
  password: string;
}
