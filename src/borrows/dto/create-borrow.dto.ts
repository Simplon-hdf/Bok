import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBorrowDto {
    @ApiProperty({
        description: 'this field represents the employee uuid',
    })
    @IsUUID()
    @IsNotEmpty()
    employee_UUID: string;

    @ApiProperty({
        description: 'this field represents the borrower uuid',
    })
    @IsUUID()
    @IsNotEmpty()
    borrower_UUID: string;

    @ApiProperty({
        description: 'this field represents the book uuid',
    })
    @IsUUID()
    @IsNotEmpty()
    book_UUID: string;
}
