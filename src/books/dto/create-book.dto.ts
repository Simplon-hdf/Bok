import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateBookDto {
    @ApiProperty()
    @IsString()
    @MaxLength(40)
    @IsNotEmpty()
    book_name: string;

    @ApiProperty()
    @IsString()
    @MaxLength(500)
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    authors_UUID: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    borrow_UUID: string;
}
