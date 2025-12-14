import { Inject, Injectable } from '@nestjs/common';
import { CreateRaffleWinnerDto } from './dto/create-raffle-winner.dto';
import { RaffleWinner } from './entities/raffle-winner.entity';
import { Optional } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { RaffleParticipant } from '../raffle-participant/entities/raffle-participant.entity';
import { EmailSenderService } from '../email-sender/email-sender.service';

@Injectable()
export class RaffleWinnerService {
  @Inject()
  private emailSenderService: EmailSenderService;

  @InjectModel(RaffleWinner)
  private raffleWinnerRepository: typeof RaffleWinner;

  @InjectModel(RaffleParticipant)
  private raffleParticipantRepository: typeof RaffleParticipant;

  async pickWinner() {
    const participants = await this.raffleParticipantRepository.findAll({
      where: { hasParticipated: false },
    });

    if (!participants?.length) {
      return null;
    }

    // Select a random winner
    const iWinner = this.sampleInt(participants.length);
    const winningParticipant = participants[iWinner];

    const winner = new RaffleWinner();
    winner.raffleParticipantId = winningParticipant.get('id');

    // Gather all the unique emails to send notifications
    const emails = participants.map((participant) => participant.get('email'));
    const uniqueEmails = new Set(emails);

    for (const email of uniqueEmails) {
      const isWinner = email === winningParticipant.get('email');
      this.emailSenderService.sendResultEmail(email, isWinner);
    }

    // Update the participants that have participated
    for (const participant of participants) {
      participant.set('hasParticipated', true);
      await participant.save();
    }

    return this.raffleWinnerRepository.create(winner as any);
  }

  create(createRaffleWinnerDto: CreateRaffleWinnerDto) {
    return this.raffleWinnerRepository.create(
      createRaffleWinnerDto as Optional<any, string>,
    );
  }

  findAll() {
    return this.raffleWinnerRepository.findAll();
  }

  sampleInt(limit: number): number {
    return Math.floor(Math.random() * limit);
  }
}
