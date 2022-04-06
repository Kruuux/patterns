import { MoveStrategy } from './MoveStrategy';

export abstract class Player {
  constructor(
    private positionX: number,
    private positionY: number,
    private moveStrategy: MoveStrategy,
  ) {}

  public moveUp(): void {
    this.positionX += this.moveStrategy.moveUp();
  }

  public moveDown(): void {
    this.positionX -= this.moveStrategy.moveDown();
  }

  public moveLeft(): void {
    this.positionY -= this.moveStrategy.moveLeft();
  }

  public moveRight(): void {
    this.positionY += this.moveStrategy.moveRight();
  }

  public setMoveStrategy(moveStrategy: MoveStrategy): void {
    this.moveStrategy = moveStrategy;
  }

  public getPositionX(): number {
    return this.positionX;
  }

  public getPositionY(): number {
    return this.positionY;
  }
}
