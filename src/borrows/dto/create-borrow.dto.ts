import { ApiProperty } from '@nestjs/swagger';
import { BorrowState } from '@prisma/client';
import { IsDate, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateBorrowDto {
    @ApiProperty({
        description: 'this field represents the borrowing date',
    })
    @IsDate()
    started_at: Date;

    @ApiProperty({
        description:
            'this field represents the when the book has to be returned',
    })
    @IsDate()
    end_at: Date;

    @ApiProperty({
        description: 'this field represents the book status',
    })
    @IsString()
    @IsNotEmpty()
    @IsEnum(BorrowState)
    status: BorrowState;

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
}
