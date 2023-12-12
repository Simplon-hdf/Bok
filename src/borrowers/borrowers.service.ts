import { Injectable } from '@nestjs/common';
import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BorrowersService {
    constructor(private readonly prisma: PrismaService) {}

    public async create(createBorrowerDto: CreateBorrowerDto) {
        return await this.prisma.borrowers.create({
            data: {
                Human_Informations: {
                    create: {
                        first_name: createBorrowerDto.first_name,
                        last_name: createBorrowerDto.last_name,
                    },
                },
            },
        });
    }

    public async findAllBorrowers() {
        return this.prisma.borrowers.findMany();
    }

    public async findAllBorrowersAndBooks() {
        //Stand-by waiting for books and borrows ressources   return
    }

    public async findOneByMail(uuid: string) {
        return this.prisma.borrowers.findUnique({
            where: {
                UUID: uuid,
            },
        });
    }

    public async update(uuid: string, updateBorrowerDto: UpdateBorrowerDto) {
        return this.prisma.borrowers.update({
            where: {
                UUID: uuid,
            },
            data: {
                Human_Informations: {
                    update: {
                        first_name: updateBorrowerDto.first_name,
                        last_name: updateBorrowerDto.last_name,
                    },
                },
            },
        });
    }

    public async delete(Human_Informations_uuid) {
        await this.prisma.humanInformations.delete({
            where: {
                UUID: Human_Informations_uuid,
            },
        });

        await this.prisma.borrowers.delete({
            where: {
                UUID: Human_Informations_uuid,
            },
        });
    }
}
