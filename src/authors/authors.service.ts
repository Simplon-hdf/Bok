import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthorsService {
    constructor(private readonly prisma: PrismaService) {}

    create(createAuthorDto: CreateAuthorDto) {
        const author = this.prisma.authors.create({
            data: {
                Human_Informations: {
                    create: {
                        first_name: createAuthorDto.first_name,
                        last_name: createAuthorDto.last_name,
                    },
                },
            },
        });

        return author;
    }

    findAll() {
        const authors = this.prisma.authors.findMany({
            include: {
                Human_Informations: true,
            },
        });

        return authors;
    }

    getByUUID(uuid: string) {
        const author = this.prisma.authors.findUnique({
            where: {
                UUID: uuid,
            },
            include: {
                Human_Informations: true,
            },
        });

        return author;
    }

    getBooksByAuthorUUID(uuid: string) {
        const books = this.prisma.books.findMany({
            where: {
                authors_UUID: uuid,
            },
        });

        return books;
    }

    update(uuid: string, updateAuthorDto: UpdateAuthorDto) {
        const author = this.prisma.authors.update({
            data: {
                Human_Informations: {
                    update: {
                        first_name: updateAuthorDto.first_name,
                        last_name: updateAuthorDto.last_name,
                    },
                },
            },
            where: {
                UUID: uuid,
            },
        });

        return author;
    }

    delete(uuid: string) {
        const author = this.prisma.authors.delete({
            where: {
                UUID: uuid,
            },
        });

        return author;
    }
}
