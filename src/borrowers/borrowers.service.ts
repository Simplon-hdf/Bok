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
                human_informations: {
                    create: {
                        first_name: createBorrowerDto.first_name,
                        last_name: createBorrowerDto.last_name,
                    },
                },
            },
        });
    }

    public async findAllBorrowers() {
        return await this.prisma.borrowers.findMany();
    }

    public async findAllBorrowersAndBooks() {
        return await this.prisma.borrowers.findMany({
            include: {
                borrow: {
                    include: {
                        book: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        });
    }

    public async findOneByUUID(uuid: string) {
        return await this.prisma.borrowers.findUnique({
            where: {
                UUID: uuid,
            },
        });
    }

    public async update(uuid: string, updateBorrowerDto: UpdateBorrowerDto) {
        return await this.prisma.borrowers.update({
            where: {
                UUID: uuid,
            },
            data: {
                human_informations: {
                    update: {
                        first_name: updateBorrowerDto.first_name,
                        last_name: updateBorrowerDto.last_name,
                    },
                },
            },
        });
    }

    public async delete(humanInformationsUUID: string) {
        return await this.prisma.borrowers.delete({
            where: {
                UUID: humanInformationsUUID,
            },
        });
    }
}
