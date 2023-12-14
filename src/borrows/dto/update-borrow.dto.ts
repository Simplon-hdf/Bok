import { PartialType } from '@nestjs/swagger';
import { CreateBorrowDto } from './create-borrow.dto';
import { IsOptional } from 'class-validator';
import { BorrowState } from '@prisma/client';

export class UpdateBorrowDto extends PartialType(CreateBorrowDto) {
    @IsOptional()
    started_at?: Date;

    @IsOptional()
    end_at?: Date;

    @IsOptional()
    status?: BorrowState;

    @IsOptional()
    employees_UUID?: string;

    @IsOptional()
    borrowers_UUID?: string;
}
