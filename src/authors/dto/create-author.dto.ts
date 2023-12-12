import { PartialType } from '@nestjs/swagger';
import { CreateHumanInformationDto } from 'src/human-informations/dto/create-human-information.dto';

export class CreateAuthorDto extends PartialType(CreateHumanInformationDto) {}
