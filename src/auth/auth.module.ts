import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strrategy';

@Module({
  imports: [
    // 유저를 인증하기 위해 사용할 기본 strategy 명시
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // jwt 인증 부분을 담당하고 주로 sign()을 위한 부분
    JwtModule.register({
      secret: 'Secret1234', // 토큰을 생성할 때 이용하는 secret text
      signOptions: {
        expiresIn: 60 * 60, // 토큰 유효시간(3600s=1hour)
      },
    }),
    TypeOrmModule.forFeature([UserRepository])],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}
