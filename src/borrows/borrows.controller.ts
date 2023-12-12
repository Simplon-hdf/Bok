import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { BorrowsService } from './borrows.service';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { UpdateBorrowDto } from './dto/update-borrow.dto';

@Controller('borrows')
export class BorrowsController {
    constructor(private readonly borrowsService: BorrowsService) {}

    @Post()
    create(@Body() createBorrowDto: CreateBorrowDto) {
        return this.borrowsService.create(createBorrowDto);
    }

    @Get()
    findAll() {
        return this.borrowsService.findAll();
    }

    @Get(':uuid')
    getByUUID(@Param('uuid') id: string) {
        return this.borrowsService.getByUUID(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBorrowDto: UpdateBorrowDto) {
        return this.borrowsService.update(+id, updateBorrowDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.borrowsService.remove(+id);
    }
}
