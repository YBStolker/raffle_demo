import { Module } from '@nestjs/common';
import { RaffleParticipantService } from './raffle-participant.service';
import { RaffleParticipantController } from './raffle-participant.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RaffleParticipant } from './entities/raffle-participant.entity';
import { EmailSenderService } from '../email-sender/email-sender.service';

@Module({
  imports: [SequelizeModule.forFeature([RaffleParticipant])],
  controllers: [RaffleParticipantController],
  providers: [RaffleParticipantService, EmailSenderService],
})
export class RaffleParticipantModule {}
