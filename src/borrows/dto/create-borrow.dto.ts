import { ApiProperty } from '@nestjs/swagger';
import { BorrowState } from '@prisma/client';
import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';

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
}
