import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthorsService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createAuthorDto: CreateAuthorDto) {
        const author = await this.prisma.authors.create({
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

    async findAll() {
        const authors = await this.prisma.authors.findMany({
            include: {
                Human_Informations: true,
            },
        });

        return authors;
    }

    async getByUUID(uuid: string) {
        const author = await this.prisma.authors.findUnique({
            where: {
                UUID: uuid,
            },
            include: {
                Human_Informations: true,
            },
        });

        return author;
    }

    async getBooksByAuthorUUID(uuid: string) {
        const books = await this.prisma.books.findMany({
            where: {
                authors_UUID: uuid,
            },
        });

        return books;
    }

    async update(uuid: string, updateAuthorDto: UpdateAuthorDto) {
        const author = await this.prisma.authors.update({
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

    async delete(Human_Informations_uuid: string) {
        const author = await this.prisma.humanInformations.delete({
            where: {
                UUID: Human_Informations_uuid,
            },
        });

        return author;
    }
}
