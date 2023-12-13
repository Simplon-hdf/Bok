import { PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';
import { IsOptional } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsOptional()
    book_name?: string;
    @IsOptional()
    description?: string;
    @IsOptional()
    authors_UUID?: string;
}
