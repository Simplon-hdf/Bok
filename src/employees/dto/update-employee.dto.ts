import { IsOptional } from 'class-validator';
import { CreateEmployeeDto } from './create-employee.dto';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
  @IsOptional()
  mail_address?: string;

  @IsOptional()
  password?: string;
}
