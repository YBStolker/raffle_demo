import { PartialType } from '@nestjs/mapped-types';
import { CreateRaffleWinnerDto } from './create-raffle-winner.dto';

export class UpdateRaffleWinnerDto extends PartialType(CreateRaffleWinnerDto) {}
