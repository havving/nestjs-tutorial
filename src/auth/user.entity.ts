import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Board } from '../boards/boards.entity';

@Entity()
@Unique(['userName'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  /** eager(true): User 객체를 가져올 때, Board 객체도 가져오겠다고 설정 **/
  @OneToMany(type => Board, board => board.user, { eager: true })
  boards: Board[];

}
