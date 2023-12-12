import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HumanInformationsModule } from './human-informations/human-informations.module';
import { BorrowersModule } from './borrowers/borrowers.module';
import { EmployeesModule } from './employees/employees.module';
import { BooksModule } from './books/books.module';
import { BorrowsModule } from './borrows/borrows.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    HumanInformationsModule,
    BorrowersModule,
    EmployeesModule,
    BooksModule,
    BorrowsModule,
    AuthorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
