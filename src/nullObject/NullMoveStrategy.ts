import { MoveStrategy } from './MoveStrategy';

export class NullMoveStrategy implements MoveStrategy {
  moveUp(): number {
    return 0;
  }

  moveDown(): number {
    return 0;
  }

  moveLeft(): number {
    return 0;
  }

  moveRight(): number {
    return 0;
  }
}
