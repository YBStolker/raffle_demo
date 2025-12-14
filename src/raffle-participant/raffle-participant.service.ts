import { Inject, Injectable } from '@nestjs/common';
import { CreateRaffleParticipantDto } from './dto/create-raffle-participant.dto';
import { InjectModel } from '@nestjs/sequelize';
import { RaffleParticipant } from './entities/raffle-participant.entity';
import { Optional } from 'sequelize';
import { EmailSenderService } from '../email-sender/email-sender.service';

@Injectable()
export class RaffleParticipantService {
  @Inject()
  private emailSenderService: EmailSenderService;

  @InjectModel(RaffleParticipant)
  private raffleParticipantRepository: typeof RaffleParticipant;

  create(createRaffleParticipantDto: CreateRaffleParticipantDto) {
    return this.raffleParticipantRepository
      .create(createRaffleParticipantDto as Optional<any, string>)
      .then((participant) => {
        this.emailSenderService.sendConfirmationEmail(participant.get('email'));
        return participant;
      });
  }

  findAll() {
    return this.raffleParticipantRepository.findAll();
  }

  findByEmail(email: string) {
    return this.raffleParticipantRepository.findAll({ where: { email } });
  }
}
