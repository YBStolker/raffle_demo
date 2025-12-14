import { Module } from '@nestjs/common';
import { RaffleWinnerService } from './raffle-winner.service';
import { RaffleWinnerController } from './raffle-winner.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RaffleWinner } from './entities/raffle-winner.entity';
import { RaffleParticipant } from '../raffle-participant/entities/raffle-participant.entity';
import { EmailSenderService } from '../email-sender/email-sender.service';

@Module({
  imports: [SequelizeModule.forFeature([RaffleWinner, RaffleParticipant])],
  controllers: [RaffleWinnerController],
  providers: [RaffleWinnerService, EmailSenderService],
  exports: [RaffleWinnerService],
})
export class RaffleWinnerModule {}
