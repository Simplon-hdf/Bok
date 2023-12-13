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

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Post()
    create(@Body() createEmployeeDto: CreateEmployeeDto) {
        return this.employeesService.create(createEmployeeDto);
    }

    @Get(':mail_address')
    getByMail(@Param('mail_address') mail_address: string) {
        return this.employeesService.getByMail(mail_address);
    }

    @Patch(':uuid')
    updateByUUID(
        @Param('uuid') uuid: string,
        @Body() updateEmployeeDto: UpdateEmployeeDto,
    ) {
        return this.employeesService.updateByUUID(uuid, updateEmployeeDto);
    }

    @Delete(':Human_Informations_uuid')
    remove(@Param('Human_Informations_uuid') Human_Informations_uuid: string) {
        return this.employeesService.deleteEmployeeInfoByUUID(
            Human_Informations_uuid,
        );
    }
}
