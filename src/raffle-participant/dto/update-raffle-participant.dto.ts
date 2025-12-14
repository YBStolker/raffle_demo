import { PartialType } from '@nestjs/mapped-types';
import { CreateRaffleParticipantDto } from './create-raffle-participant.dto';

export class UpdateRaffleParticipantDto extends PartialType(CreateRaffleParticipantDto) {}
