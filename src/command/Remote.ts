import { Command } from './Command';

export class Remote {
  constructor(
    private readonly buttonA: Command | null,
    private readonly buttonB: Command | null,
  ) {}

  clickLeftButton(): void {
    if (this.buttonA) this.buttonA.execute();
  }

  clickRightButton(): void {
    if (this.buttonB) this.buttonB.execute();
  }
}
