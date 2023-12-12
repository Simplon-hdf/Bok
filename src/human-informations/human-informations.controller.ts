import { Controller } from '@nestjs/common';
import { HumanInformationsService } from './human-informations.service';

@Controller('human-informations')
export class HumanInformationsController {
    constructor(
        private readonly humanInformationsService: HumanInformationsService,
    ) {}
}
