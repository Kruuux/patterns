import { MoveStrategy } from './MoveStrategy';

export class RunMoveStrategy implements MoveStrategy {
  moveUp(): number {
    return 50;
  }

  moveDown(): number {
    return 50;
  }

  moveLeft(): number {
    return 35;
  }

  moveRight(): number {
    return 35;
  }
}
