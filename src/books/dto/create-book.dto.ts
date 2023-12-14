import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateBookDto {
    @ApiProperty({ description: 'This field represents the name of the book' })
    @IsString()
    @MaxLength(40)
    @IsNotEmpty()
    book_name: string;

    @ApiProperty({
        description: 'This field represents the description of the book',
    })
    @IsString()
    @MaxLength(500)
    @IsNotEmpty()
    description: string;

    @ApiProperty({
        description: 'This field represents the author of the book',
    })
    @IsString()
    @IsNotEmpty()
    author_UUID: string;
}
