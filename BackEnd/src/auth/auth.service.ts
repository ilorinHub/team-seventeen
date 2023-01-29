import * as argon2 from 'argon2';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/login.dto';
import { signupDto } from './dtos/sign-up.dto';
import { User, UserRole } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async generateAccessToken(user: User): Promise<any> {
    return this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });
  }

  generateVerificationCode() {
    return String(Math.floor(100000 + Math.random() * 900000));
  }

  async signUp(data: signupDto) {
    try {
      if (data.password !== data.confirmPassword) {
        throw new BadRequestException('passwords must match');
      }
      const user = new User();
      user.fullName = data.fullName;
      user.email = data.email;
      user.phoneNumber = data.phoneNumber;
      user.password = data.password;
      user.facilityAddress = data.facilityAddress;
      user.facilityName = data.facilityName;
      user.lga = data.lga;
      user.mdcnNumber = data.mdcnNumber;
      user.medicalLicenseNumber = data.medicalLicenseNumber;
      user.state = data.state;
      user.stateId = data.stateId;
      if (
        data.facilityName &&
        data.facilityAddress &&
        data.state &&
        data.lga &&
        data.medicalLicenseNumber
      ) {
        user.role = UserRole.healthCareProvider;
      } else if (data.facilityName && data.mdcnNumber) {
        user.role = UserRole.doctor;
      } else {
        user.role = UserRole.patient;
      }

      user.verificationCode = this.generateVerificationCode();
      user.verificationCodeExpiresIn = new Date();

      const savedUser = await this.userRepo.save(user);
      const accessToken = await this.generateAccessToken(savedUser);
      delete user.password;
      return {
        user: savedUser,
        accessToken,
      };
    } catch (error) {
      if (error?.code === '23505') {
        throw new BadRequestException('email address already exists');
      }
    }
  }

  async login(data: LoginDto) {
    const user = await this.userRepo.findOneBy({ email: data.email });
    if (!user) {
      throw new BadRequestException('invalid login credentials provided');
    }
    const isValidPassword = await argon2.verify(user.password, data.password, {
      saltLength: 10,
    });
    if (!isValidPassword) {
      throw new BadRequestException('invalid login credentials provided');
    }
    const accessToken = await this.generateAccessToken(user);
    delete user.password;
    return {
      user,
      accessToken,
    };
  }

  async verifyEmail() {}
}
