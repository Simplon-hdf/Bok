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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('borrowers')
@ApiTags('Borrowers')
export class BorrowersController {
    constructor(private readonly borrowersService: BorrowersService) {}

    @Post()
    @ApiOperation({ description: 'Add a new borrower' })
    create(@Body() createBorrowerDto: CreateBorrowerDto) {
        return this.borrowersService.create(createBorrowerDto);
    }

    @Get()
    @ApiOperation({ description: 'Get all borrowers' })
    findAll() {
        return this.borrowersService.findAllBorrowers();
    }

    @Get(':uuid')
    @ApiOperation({ description: 'Get a borrower by its UUID' })
    findOne(@Param('uuid') uuid: string) {
        return this.borrowersService.findOneByUUID(uuid);
    }

    @Patch(':uuid')
    @ApiOperation({ description: 'Update a borrower by its UUID' })
    update(
        @Param('uuid') uuid: string,
        @Body() updateBorrowerDto: UpdateBorrowerDto,
    ) {
        return this.borrowersService.update(uuid, updateBorrowerDto);
    }

    @Delete(':uuid')
    @ApiOperation({ description: 'Delete a borrower by its UUID' })
    remove(@Param('uuid') uuid: string) {
        return this.borrowersService.delete(uuid);
    }
}
