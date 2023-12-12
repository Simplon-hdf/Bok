import { Injectable } from '@nestjs/common';

@Injectable()
export class HumanInformationsService {
    create(createHumanInformationDto: CreateHumanInformationDto) {
        return 'This action adds a new humanInformation';
    }

    findAll() {
        return `This action returns all humanInformations`;
    }

    findOne(id: number) {
        return `This action returns a #${id} humanInformation`;
    }

    update(id: number, updateHumanInformationDto: UpdateHumanInformationDto) {
        return `This action updates a #${id} humanInformation`;
    }

    remove(id: number) {
        return `This action removes a #${id} humanInformation`;
    }
}
