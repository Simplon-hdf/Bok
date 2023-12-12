import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { CreateHumanInformationDto } from 'src/human-informations/dto/create-human-information.dto';

export class CreateEmployeeDto extends CreateHumanInformationDto {
    @Length(2, 80)
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        description: 'employee email address',
    })
    mail_address: string;

    @Length(3, 72)
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'employee password',
    })
    password: string;
}
