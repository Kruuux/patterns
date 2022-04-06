import { MoveStrategy } from './MoveStrategy';
import { Player } from './Player';

export class Footballer extends Player {
  constructor(
    positionX: number,
    positionY: number,
    moveStrategy: MoveStrategy,
  ) {
    super(positionX, positionY, moveStrategy);
  }
}
