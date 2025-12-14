import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RaffleParticipantService } from './raffle-participant.service';
import { CreateRaffleParticipantDto } from './dto/create-raffle-participant.dto';

@Controller('raffle-participant')
export class RaffleParticipantController {
  constructor(
    private readonly raffleParticipantService: RaffleParticipantService,
  ) {}

  @Post()
  create(@Body() createRaffleParticipantDto: CreateRaffleParticipantDto) {
    return this.raffleParticipantService.create(createRaffleParticipantDto);
  }

  @Get()
  findAll() {
    return this.raffleParticipantService.findAll();
  }

  @Get(':email')
  findByEmail(@Param('email') email: string) {
    return this.raffleParticipantService.findByEmail(email);
  }
}
