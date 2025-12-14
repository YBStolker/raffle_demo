import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { dbConfig } from './dbConfig';
import { RaffleParticipantModule } from './raffle-participant/raffle-participant.module';
import { RaffleWinnerModule } from './raffle-winner/raffle-winner.module';
import { WeeklyWinnerService } from './weekly-winner/weekly-winner.service';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailSenderService } from './email-sender/email-sender.service';
import { WeeklyWinnerModule } from './weekly-winner/weekly-winner.module';

@Module({
  imports: [
    RaffleParticipantModule,
    RaffleWinnerModule,
    ScheduleModule.forRoot(),
    SequelizeModule.forRoot(dbConfig),
    WeeklyWinnerModule,
  ],
  controllers: [AppController],
  providers: [AppService, WeeklyWinnerService, EmailSenderService],
})
export class AppModule {}
