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
                Books: {
                    connect: {
                        UUID: createBorrowDto.books_UUID,
                    },
                },
                end_at: End_At,
            },
        });
        return createBorrow;
    }

    public async findAll() {
        return await this.prisma.borrows.findMany;
    }

    public async getByUUID(uuid: string) {
        return await this.prisma.borrows.findUnique({
            where: {
                UUID: uuid,
            },
            include: {
                Books: true,
            },
        });
    }

    public async updateByUUID(uuid: string, updateBorrowDto: UpdateBorrowDto) {
        return await this.prisma.borrows.update({
            where: {
                UUID: uuid,
            },
            data: {
                Books: updateBorrowDto.book_UUID
                    ? {
                          connect: { UUID: updateBorrowDto.book_UUID },
                      }
                    : undefined,
                borrower: updateBorrowDto.borrowers_UUID
                    ? {
                          connect: { UUID: updateBorrowDto.borrowers_UUID },
                      }
                    : undefined,
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
