import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthUserEntity } from './entities/auth-user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBadRequestResponse({ description: 'Não foi possível realizar o login.' })
  @ApiOkResponse({ type: [AuthUserEntity] })
  @Post('login')
  async login(@Body() userData) {
    return this.authService.login(userData);
  }

  @ApiBody({ type: CreateUserDto })
  @ApiBadRequestResponse({
    description: 'Por favor, preencha todos os campos necessários.',
  })
  @ApiOkResponse({ type: [AuthUserEntity] })
  @Post('register')
  async register(@Body() userData) {
    return this.authService.register(userData);
  }
}
