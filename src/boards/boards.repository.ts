import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './boards-status.enum';
import { User } from '../auth/user.entity';

@EntityRepository(Board)
export class BoardsRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user
    });

    await this.save(board);

    return board;
  }
}
