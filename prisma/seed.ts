import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const AuthorsData = Array.from({ length: 10 }).map(() => ({
    human_informations: {
        create: {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
        },
    },
}));

const BorrowersData = Array.from({ length: 10 }).map(() => ({
    human_informations: {
        create: {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
        },
    },
}));

const EmployeesData = Array.from({ length: 10 }).map(() => ({
    human_informations: {
        create: {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
        },
    },
    mail_address: faker.internet.email(),
    password: faker.internet.password(),
}));

const BooksData = Array.from({ length: 10 }).map(() => ({
    name: faker.music.songName(),
    description: faker.lorem.lines(1),
    author: {
        create: {
            human_informations: {
                create: {
                    first_name: faker.person.firstName(),
                    last_name: faker.person.lastName(),
                },
            },
        },
    },
}));

async function main() {
    for (const i of AuthorsData) {
        await prisma.authors.create({
            data: i,
        });
    }

    for (const i of EmployeesData) {
        await prisma.employees.create({
            data: i,
        });
    }

    for (const i of BorrowersData) {
        await prisma.borrowers.create({
            data: i,
        });
    }

    for (const i of BooksData) {
        await prisma.books.create({
            data: i,
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })

    .catch(async (e) => {
        console.error(e);

        await prisma.$disconnect();

        process.exit(1);
    });
