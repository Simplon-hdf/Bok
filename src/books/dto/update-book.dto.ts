import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';
import { IsOptional } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsOptional()
    @ApiProperty({
        description: 'This field represents the updated book name',
    })
    book_name?: string;
    @IsOptional()
    @ApiProperty({
        description: 'This field represents the updated book description',
    })
    description?: string;
    @IsOptional()
    @ApiProperty({
        description: 'This field represents the updated author name',
    })
    authors_UUID?: string;
}
