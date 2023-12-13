import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { BorrowersService } from './borrowers.service';
import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';

@Controller('borrowers')
export class BorrowersController {
    constructor(private readonly borrowersService: BorrowersService) {}

    @Post()
    create(@Body() createBorrowerDto: CreateBorrowerDto) {
        return this.borrowersService.create(createBorrowerDto);
    }

    @Get()
    findAll() {
        return this.borrowersService.findAllBorrowers();
    }

    @Get(':uuid')
    findOne(@Param('uuid') uuid: string) {
        return this.borrowersService.findOneByUUID(uuid);
    }

    @Patch(':uuid')
    update(
        @Param('uuid') uuid: string,
        @Body() updateBorrowerDto: UpdateBorrowerDto,
    ) {
        return this.borrowersService.update(uuid, updateBorrowerDto);
    }

    @Delete(':uuid')
    remove(@Param('uuid') uuid: string) {
        return this.borrowersService.delete(uuid);
    }
}
