import { ApiProperty } from '@nestjs/swagger';
import { UserAuthEntity } from 'src/articles/entities/user-auth.entity';

export class AuthUserEntity {
  @ApiProperty({ description: 'Access Token' })
  access_token: string;
  @ApiProperty({ description: 'User' })
  user: UserAuthEntity;
}
