import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.userRepository.createUser(authCredentialDto);
  }

  async signIn(authCredentialsDto: AuthCredentialDto): Promise<{ accessToken: string }> {
    const { userName, password } = authCredentialsDto;
    const user = await this.userRepository.findOne({ userName });

    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성 (Secret + Payload)
      const payload = { userName }; // 중요한 정보는 넣지 말 것
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
    } else throw new UnauthorizedException('login failed');
  }
}
