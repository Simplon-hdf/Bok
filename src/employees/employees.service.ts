import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class EmployeesService {
    private saltGenRound = 12;

    constructor(private readonly prisma: PrismaService) {}

    public async create(createEmployeeDto: CreateEmployeeDto) {
        return await this.prisma.employees.create({
            data: {
                Human_Informations: {
                    create: {
                        first_name: createEmployeeDto.first_name,
                        last_name: createEmployeeDto.last_name,
                    },
                },
                mail_address: createEmployeeDto.mail_address,
                password: await bcrypt.hash(
                    createEmployeeDto.password,
                    this.saltGenRound,
                ),
            },
        });
    }

    public async getByMail(mail_address: string) {
        return this.prisma.employees.findUnique({
            where: {
                mail_address: mail_address,
            },
            include: {
                Human_Informations: true,
            },
        });
    }

    public async updateByUUID(
        uuid: string,
        updateEmployeeDto: UpdateEmployeeDto,
    ) {
        return this.prisma.employees.update({
            where: {
                UUID: uuid,
            },
            data: {
                Human_Informations: {
                    update: {
                        first_name: updateEmployeeDto.first_name,
                        last_name: updateEmployeeDto.last_name,
                    },
                },
                mail_address: updateEmployeeDto.mail_address,
                password: updateEmployeeDto.password,
            },
        });
    }

    async deleteEmployeeInfoByMail(Human_Informations_uuid) {
        await this.prisma.humanInformations.delete({
            where: {
                UUID: Human_Informations_uuid,
            },
        });

        await this.prisma.employees.delete({
            where: {
                UUID: Human_Informations_uuid,
            },
        });
    }
}
