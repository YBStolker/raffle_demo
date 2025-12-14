import type { CreationOptional, NonAttribute } from 'sequelize';
import {
  Column,
  Table,
  Model,
  IsEmail,
  NotNull,
  PrimaryKey,
  AutoIncrement,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { RaffleWinner } from '../../raffle-winner/entities/raffle-winner.entity';

@Table({
  tableName: 'raffleParticipant',
})
export class RaffleParticipant extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: CreationOptional<number>;

  @NotNull
  @Column({ allowNull: false })
  name: string;

  @IsEmail
  @Column({ allowNull: false })
  email: string;

  @Column({ defaultValue: false })
  hasParticipated: boolean;

  @HasMany(() => RaffleWinner, 'raffleParticipantId')
  raffleWinners?: NonAttribute<RaffleWinner>;
}
