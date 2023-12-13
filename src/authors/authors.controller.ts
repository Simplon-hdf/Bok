import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('authors')
@ApiTags('Authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) {}

    @Post()
    @ApiOperation({ description: 'Add a new author' })
    create(@Body() createAuthorDto: CreateAuthorDto) {
        return this.authorsService.create(createAuthorDto);
    }

    @Get()
    @ApiOperation({ description: 'Get all authors' })
    findAll() {
        return this.authorsService.findAll();
    }

    @Get(':uuid')
    @ApiOperation({ description: 'Get an author by its UUID' })
    getByUUID(@Param('uuid') uuid: string) {
        return this.authorsService.getByUUID(uuid);
    }

    @Get(':uuid/books')
    @ApiOperation({ description: 'Get books of an author by author UUID' })
    getBooksByAuthorUUID(@Param('uuid') uuid: string) {
        return this.authorsService.getBooksByAuthorUUID(uuid);
    }

    @Patch(':uuid')
    @ApiOperation({ description: 'Update an author by its UUID' })
    update(
        @Param('uuid') uuid: string,
        @Body() updateAuthorDto: UpdateAuthorDto,
    ) {
        return this.authorsService.update(uuid, updateAuthorDto);
    }

    @Delete(':uuid')
    @ApiOperation({ description: 'Delete an author' })
    delete(@Param('uuid') uuid: string) {
        return this.authorsService.delete(uuid);
    }
}
