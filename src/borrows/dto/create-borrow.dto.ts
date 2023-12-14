import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBorrowDto {
    @ApiProperty({
        description: 'this field represents the employee uuid',
    })
    @IsUUID()
    @IsNotEmpty()
    employees_UUID: string;

    @ApiProperty({
        description: 'this field represents the borrower uuid',
    })
    @IsUUID()
    @IsNotEmpty()
    borrowers_UUID: string;

    @ApiProperty({
        description: 'this field represents the book uuid',
    })
    @IsUUID()
    @IsNotEmpty()
    books_UUID: string;
}
