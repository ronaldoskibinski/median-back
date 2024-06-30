import { ApiProperty } from '@nestjs/swagger';

export class UserAuthEntity {
  @ApiProperty({
    description: 'User ID',
  })
  id: number;
  @ApiProperty({
    description: 'User Name',
  })
  name: string;
  @ApiProperty({
    description: 'User Birthdate',
  })
  birthDate: Date;
  @ApiProperty({
    description: 'User Email',
  })
  email: string;
}
