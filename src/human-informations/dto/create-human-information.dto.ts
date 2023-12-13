import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHumanInformationDto {
    @Length(2, 30)
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'employee first name',
    })
    first_name: string;

    @Length(2, 30)
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'employee last name',
    })
    last_name: string;
}
