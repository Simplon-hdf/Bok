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
                human_informations: {
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
                human_informations: true,
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
                human_informations: true,
            },
        });

        return author;
    }

    async update(uuid: string, updateAuthorDto: UpdateAuthorDto) {
        const author = await this.prisma.authors.update({
            data: {
                human_informations: {
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

    async delete(humanInformationsUUID: string) {
        const author = await this.prisma.humanInformations.delete({
            where: {
                UUID: humanInformationsUUID,
            },
        });

        return author;
    }
}
