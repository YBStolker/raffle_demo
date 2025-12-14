import { Controller, Get, Post, Body } from '@nestjs/common';
import { RaffleWinnerService } from './raffle-winner.service';
import { CreateRaffleWinnerDto } from './dto/create-raffle-winner.dto';

@Controller('raffle-winner')
export class RaffleWinnerController {
  constructor(private readonly raffleWinnerService: RaffleWinnerService) {}

  @Post()
  pickWinner() {
    return this.raffleWinnerService.pickWinner();
  }

  @Post('create')
  create(@Body() createRaffleWinnerDto: CreateRaffleWinnerDto) {
    return this.raffleWinnerService.create(createRaffleWinnerDto);
  }

  @Get()
  findAll() {
    return this.raffleWinnerService.findAll();
  }
}
