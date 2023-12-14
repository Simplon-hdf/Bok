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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('books')
@ApiTags('Books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    @ApiOperation({ description: 'Add a new book' })
    create(@Body() createBookDto: CreateBookDto) {
        return this.booksService.create(createBookDto);
    }

    @Get()
    @ApiOperation({ description: 'Get all books' })
    findAll() {
        return this.booksService.findAll();
    }
    // TODO: rajouter status du livre

    @Get(':uuid')
    @ApiOperation({ description: 'Get a book by its UUID' })
    getByUUID(@Param('uuid') uuid: string) {
        return this.booksService.getByUUID(uuid);
    }

    @Get('/author/:uuid')
    @ApiOperation({ description: 'Get books by author UUID' })
    getByAuthorUUID(@Param('uuid') authorUUID: string) {
        return this.booksService.getByAuthorUUID(authorUUID);
    }

    @Patch(':uuid')
    @ApiOperation({ description: 'Update a book by its UUID' })
    update(@Param('uuid') uuid: string, @Body() updateBookDto: UpdateBookDto) {
        return this.booksService.updateByUUID(uuid, updateBookDto);
    }

    @Delete(':uuid')
    @ApiOperation({ description: 'Delete a book by its UUID' })
    deleteByUUID(@Param('uuid') uuid: string) {
        return this.booksService.deleteByUUID(uuid);
    }
}
