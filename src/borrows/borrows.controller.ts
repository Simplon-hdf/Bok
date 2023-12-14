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
    getByUUID(@Param('uuid') uuid: string) {
        return this.borrowsService.getByUUID(uuid);
    }

    @Patch(':uuid')
    updateByUUID(
        @Param('uuid') uuid: string,
        @Body() updateBorrowDto: UpdateBorrowDto,
    ) {
        return this.borrowsService.updateByUUID(uuid, updateBorrowDto);
    }

    @Delete(':uuid')
    deleteByUUID(@Param('uuid') uuid: string) {
        return this.borrowsService.deletebyUUID(uuid);
    }
}
