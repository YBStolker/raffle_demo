import { Module } from '@nestjs/common';
import { RaffleWinnerModule } from '../raffle-winner/raffle-winner.module';

@Module({
  imports: [RaffleWinnerModule],
  providers: [],
})
export class WeeklyWinnerModule {}
