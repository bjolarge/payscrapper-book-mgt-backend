import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../../user/entities/user.entity';
import { UsersService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private usersService: UsersService,
    private configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // secretOrKey: `Todo-Protect Me`,
      // secretOrKey: process.env.JWT_SECRET,
      secretOrKey: configService.get('33cfjw2sdkswaajeFqcj'),
      // secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    // return { userId: payload.sub, username: payload.username };
    const { username } = payload;
    const user: User = await this.usersService.getUser(username);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}