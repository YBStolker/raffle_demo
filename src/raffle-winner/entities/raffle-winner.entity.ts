import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { RaffleParticipant } from '../../raffle-participant/entities/raffle-participant.entity';

@Table({
  tableName: 'raffleWinner',
})
export class RaffleWinner extends Model {
  @ForeignKey(() => RaffleParticipant)
  @Column({ allowNull: false, type: DataType.INTEGER })
  raffleParticipantId: number;
}
