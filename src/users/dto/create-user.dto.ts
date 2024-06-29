import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ required: true })
    name: string;
  
    @ApiProperty({ required: true })
    userName: string;

    @ApiProperty({ required: true })
    email: string;
  
    @ApiProperty({ required: true })
    password: string;

    @ApiProperty({ required: false })
    birthdate?: Date;
}
