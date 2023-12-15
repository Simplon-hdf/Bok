import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('employees')
@ApiTags('Employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Post()
    @ApiOperation({ description: 'Add a new employee' })
    create(@Body() createEmployeeDto: CreateEmployeeDto) {
        return this.employeesService.create(createEmployeeDto);
    }

    @Get(':mail_address')
    @ApiOperation({ description: 'Get an employee by its mail address' })
    getByMail(@Param('mail_address') mail_address: string) {
        return this.employeesService.getByMail(mail_address);
    }

    @Patch(':uuid')
    @ApiOperation({ description: 'Update an employee by its UUID' })
    updateByUUID(
        @Param('uuid') uuid: string,
        @Body() updateEmployeeDto: UpdateEmployeeDto,
    ) {
        return this.employeesService.updateByUUID(uuid, updateEmployeeDto);
    }

    @Delete(':uuid')
    @ApiOperation({ description: 'Delete an employee by its UUID' })
    remove(@Param('uuid') uuid: string) {
        return this.employeesService.deleteEmployeeInfoByUUID(uuid);
    }
}
