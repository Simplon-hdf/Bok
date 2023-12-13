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

    public async updateByUUID(uuid: number, updateBookDto: UpdateBookDto) {
        return `This action updates a #${id} book`;
    }

    remove(id: number) {
        return `This action removes a #${id} book`;
    }
}
