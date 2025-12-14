// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CronExpression } from '@nestjs/schedule';

import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { RaffleWinnerService } from '../raffle-winner/raffle-winner.service';

@Injectable()
export class WeeklyWinnerService {
  private readonly logger = new Logger(WeeklyWinnerService.name);

  @Inject()
  private raffleWinnerService: RaffleWinnerService;

  @Cron('0 13 * * 1')
  pickWinnerWeekly() {
    return this.raffleWinnerService.pickWinner();
  }

  // @Cron(CronExpression.EVERY_10_SECONDS)
  // pickWinnerEvery10sDebug() {
  //   this.logger.debug('Picking winners.');
  //   return this.raffleWinnerService.pickWinner();
  // }
}
