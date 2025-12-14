import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EmailSenderService {
  private readonly logger = new Logger(EmailSenderService.name);

  sendResultEmail(email: string, isWinner: boolean) {
    this.logger.debug(
      `MOCK send ${isWinner ? 'winner' : 'loser'} email to: ${email}`,
    );
  }

  sendConfirmationEmail(email: string) {
    this.logger.debug(`MOCK send confirmation email to: ${email}`);
  }
}
