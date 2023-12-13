import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooksService {
    constructor(private readonly prisma: PrismaService) {}

    public async create(createBookDto: CreateBookDto) {
        return await this.prisma.books.create({
            data: {
                name: createBookDto.book_name,
                description: createBookDto.description,
                author: {
                    connect: { UUID: createBookDto.authors_UUID },
                },
                borrow: {
                    connect: { UUID: createBookDto.borrow_UUID },
                },
            },
        });
    }

    findAll() {
        return `This action returns all books`;
    }

    public async getByUUID(uuid: string) {
        return await this.prisma.books.findUnique({
            where: { UUID: uuid },
        });
    }

    public async updateByUUID(uuid: string, updateBookDto: UpdateBookDto) {
        return await this.prisma.books.update({
            where: { UUID: uuid },
            data: {
                name: updateBookDto.book_name,
                description: updateBookDto.description,
                author: {
                    connect: { UUID: updateBookDto.authors_UUID },
                },
                borrow: {
                    connect: { UUID: updateBookDto.borrow_UUID },
                },
            },
        });
    }

    public async deleteByUUID(uuid: string) {
        return await this.prisma.books.delete({
            where: { UUID: uuid },
        });
    }
}
