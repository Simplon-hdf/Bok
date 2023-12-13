import { Injectable } from '@nestjs/common';
import { CreateBorrowDto } from './dto/create-borrow.dto';
import { UpdateBorrowDto } from './dto/update-borrow.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BorrowsService {
    constructor(private readonly prisma: PrismaService) {}

    public async create(createBorrowDto: CreateBorrowDto) {
        const End_At = new Date();
        End_At.setDate(End_At.getDate() + 14);

        const createBorrow = await this.prisma.borrows.create({
            data: {
                borrower: {
                    connect: {
                        UUID: createBorrowDto.borrowers_UUID,
                    },
                },
                employee: {
                    connect: {
                        UUID: createBorrowDto.employees_UUID,
                    },
                },

                status: createBorrowDto.status,
                started_at: new Date(),
                end_at: End_At,
            },
        });
        return createBorrow;
    }

    findAll() {
        return `This action returns all borrows`;
    }
    findAll() {
        return `This action returns all borrows`;
    }

    public async getByUUID(uuid: string) {
        return await this.prisma.borrows.findUnique({
            where: {
                UUID: uuid,
            },
        });
    }

    public async updateByUUID(uuid: string, updateBorrowDto: UpdateBorrowDto) {
        return await this.prisma.borrows.update({
            where: {
                UUID: uuid,
            },
            data: {
                status: updateBorrowDto.status,
                started_at: updateBorrowDto.started_at,
                end_at: updateBorrowDto.end_at,
            },
        });
    }

    public async deletebyUUID(uuid: string) {
        return await this.prisma.borrows.delete({
            where: {
                UUID: uuid,
            },
        });
    }
}
