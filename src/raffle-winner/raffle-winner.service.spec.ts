// TODO

import { Test, TestingModule } from '@nestjs/testing';
import { RaffleWinnerService } from './raffle-winner.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RaffleWinnerController } from './raffle-winner.controller';
import { EmailSenderService } from '../email-sender/email-sender.service';
import { RaffleWinner } from './entities/raffle-winner.entity';
import { RaffleParticipant } from '../raffle-participant/entities/raffle-participant.entity';

describe('RaffleWinnerService', () => {
  let service: RaffleWinnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SequelizeModule.forFeature([RaffleWinner, RaffleParticipant])],
      controllers: [RaffleWinnerController],
      providers: [RaffleWinnerService, EmailSenderService],
      exports: [RaffleWinnerService],
    }).compile();

    service = module.get<RaffleWinnerService>(RaffleWinnerService);
  });

  it('sampleInt', () => {
    expect(service).toBeDefined();
    for (let i = 0; i < 100; i++) {
      const result = service.sampleInt(3);
      expect([0, 1, 2].includes(result)).toBe(true);
    }
  });
});
