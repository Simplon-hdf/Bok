import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    create(@Body() createBookDto: CreateBookDto) {
        return this.booksService.create(createBookDto);
    }

    @Get()
    findAll() {
        return this.booksService.findAll();
    }
    // TODO: rajouter status du livre

    @Get(':uuid')
    getByUUID(@Param('uuid') uuid: string) {
        return this.booksService.getByUUID(uuid);
    }

    @Patch(':uuid')
    update(@Param('uuid') uuid: string, @Body() updateBookDto: UpdateBookDto) {
        return this.booksService.updateByUUID(uuid, updateBookDto);
    }

    @Delete(':uuid')
    deleteByUUID(@Param('uuid') uuid: string) {
        return this.booksService.deleteByUUID(uuid);
    }
}
