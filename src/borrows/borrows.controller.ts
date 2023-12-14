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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('borrows')
@ApiTags('Borrows')
export class BorrowsController {
    constructor(private readonly borrowsService: BorrowsService) {}

    @Post()
    @ApiOperation({ description: 'Add a new borrow' })
    create(@Body() createBorrowDto: CreateBorrowDto) {
        return this.borrowsService.create(createBorrowDto);
    }
    @Get()
    @ApiOperation({ description: 'Get all borrows' })
    findAll() {
        return this.borrowsService.findAll();
    }

    @Get(':uuid')
    @ApiOperation({ description: 'Get a borrow by iys UUID' })
    getByUUID(@Param('uuid') uuid: string) {
        return this.borrowsService.getByUUID(uuid);
    }

    @Patch(':uuid')
    @ApiOperation({ description: 'Update a borrow by its UUID' })
    updateByUUID(
        @Param('uuid') uuid: string,
        @Body() updateBorrowDto: UpdateBorrowDto,
    ) {
        return this.borrowsService.updateByUUID(uuid, updateBorrowDto);
    }

    @Delete(':uuid')
    @ApiOperation({ description: 'Delete a borrow by its UUID' })
    deleteByUUID(@Param('uuid') uuid: string) {
        return this.borrowsService.deletebyUUID(uuid);
    }
}
